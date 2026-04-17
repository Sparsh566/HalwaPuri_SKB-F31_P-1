import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // 1. Create Organization
  const org = await prisma.organization.create({
    data: {
      name: 'Apex Manufacturing',
      industry: 'Manufacturing',
      reportingYear: 2026,
    },
  });

  console.log(`Created Organization: ${org.name}`);

  // 2. Create Facilities
  const facilityNames = ['North Plant', 'South Plant', 'East Distribution Center'];
  const facilities = [];
  for (const name of facilityNames) {
    const fac = await prisma.facility.create({
      data: {
        organizationId: org.id,
        name,
        location: faker.location.city(),
        type: 'Manufacturing',
      },
    });
    facilities.push(fac);
  }
  console.log(`Created ${facilities.length} Facilities`);

  // 3. Create Suppliers
  const suppliers = [];
  for (let i = 0; i < 10; i++) {
    const supplier = await prisma.supplier.create({
      data: {
        organizationId: org.id,
        name: faker.company.name(),
        contactName: faker.person.fullName(),
        contactEmail: faker.internet.email(),
        category: faker.helpers.arrayElement(['Logistics', 'Raw Materials', 'Packaging']),
        priorityTier: faker.helpers.arrayElement(['Tier 1', 'Tier 2']),
      },
    });
    suppliers.push(supplier);
  }
  console.log(`Created ${suppliers.length} Suppliers`);

  // 4. Generate 1000 Scope 3 Validation Records (SupplierSubmissions)
  console.log('Generating 1,000 Scope 3 Validation Records...');
  const scope3Categories = [
    'Purchased Goods and Services',
    'Upstream Transportation',
    'Waste Generated in Operations',
    'Business Travel'
  ];
  
  const statuses = ['VALIDATED', 'SUBMITTED', 'REJECTED'];
  // Weighting the statuses to have mostly validated, some submitted, some rejected
  const weightedStatuses = [
    ...Array(70).fill('VALIDATED'),
    ...Array(15).fill('SUBMITTED'),
    ...Array(15).fill('REJECTED')
  ];

  let createdRecords = 0;
  for (let i = 0; i < 1000; i++) {
    const randomSupplier = faker.helpers.arrayElement(suppliers);
    const date = faker.date.recent({ days: 180 }); // Last 6 months
    const periodStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    
    await prisma.supplierSubmission.create({
      data: {
        supplierId: randomSupplier.id,
        organizationId: org.id,
        scope3Category: faker.helpers.arrayElement(scope3Categories),
        activityValue: faker.number.float({ min: 10, max: 5000, fractionDigits: 2 }),
        activityUnit: faker.helpers.arrayElement(['kg', 'liters', 'km', 'units']),
        reportingPeriod: periodStr,
        dataQualityScore: faker.number.int({ min: 40, max: 100 }),
        status: faker.helpers.arrayElement(weightedStatuses),
        notes: faker.datatype.boolean({ probability: 0.2 }) ? faker.lorem.sentence() : null,
        createdAt: date,
      },
    });
    createdRecords++;
    if (createdRecords % 200 === 0) {
      console.log(`Created ${createdRecords} / 1000 records...`);
    }
  }
  
  // 5. Generate a few Scope 1 and 2 records just so the org isn't empty for other views
  for (let i = 0; i < 50; i++) {
    const randomFacility = faker.helpers.arrayElement(facilities);
    const isScope1 = faker.datatype.boolean();
    
    await prisma.emissionRecord.create({
      data: {
        organizationId: org.id,
        facilityId: randomFacility.id,
        sourceType: isScope1 ? 'Diesel' : 'Grid Electricity',
        scope: isScope1 ? 'SCOPE_1' : 'SCOPE_2',
        category: isScope1 ? 'Stationary Combustion' : 'Purchased Electricity',
        activityValue: faker.number.float({ min: 100, max: 10000, fractionDigits: 2 }),
        activityUnit: isScope1 ? 'liters' : 'kWh',
        calculatedEmissions: faker.number.float({ min: 50, max: 5000, fractionDigits: 2 }),
        periodMonth: faker.number.int({ min: 1, max: 12 }),
        periodYear: 2026,
        status: faker.helpers.arrayElement(['ACCEPTED', 'FLAGGED']),
      }
    });
  }
  console.log('Created 50 Scope 1 & 2 base records.');

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
