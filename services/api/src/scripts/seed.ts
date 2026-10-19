import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { ddbDocClient } from '../repositories/dynamoClient.js';
import { config } from '../config/index.js';
import { INITIAL_PRODUCTS } from '../repositories/productRepository.js';
import { INITIAL_INVENTORY } from '../repositories/inventoryRepository.js';

async function seedDynamoDB() {
  console.log(`[Seed Script] Initializing DynamoDB seeding in region ${config.awsRegion}...`);
  console.log(`[Seed Script] Products Table: ${config.productsTable}`);
  console.log(`[Seed Script] Inventory Table: ${config.inventoryTable}`);

  // 1. Seed Products Table
  for (const product of INITIAL_PRODUCTS) {
    try {
      await ddbDocClient.send(
        new PutCommand({
          TableName: config.productsTable,
          Item: product,
        })
      );
      console.log(`  ✓ Product seeded: ${product.name} (${product.productId})`);
    } catch (err: unknown) {
      console.error(`  ✗ Failed to seed product ${product.productId}:`, (err as Error).message);
    }
  }

  // 2. Seed Inventory Table
  for (const [productId, inv] of Object.entries(INITIAL_INVENTORY)) {
    try {
      await ddbDocClient.send(
        new PutCommand({
          TableName: config.inventoryTable,
          Item: {
            productId,
            available: inv.available,
            reserved: inv.reserved,
            updatedAt: new Date().toISOString(),
          },
        })
      );
      console.log(`  ✓ Inventory seeded: ${productId} -> available: ${inv.available}, reserved: ${inv.reserved}`);
    } catch (err: unknown) {
      console.error(`  ✗ Failed to seed inventory ${productId}:`, (err as Error).message);
    }
  }

  console.log('\n[Seed Script] Seeding complete! Products and inventory are ready in AWS DynamoDB.');
}

seedDynamoDB().catch((err) => {
  console.error('[Seed Script Fatal Error]:', err);
  process.exit(1);
});
