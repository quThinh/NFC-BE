import { Injectable, Logger } from "@nestjs/common";
import { SeedService } from "./seed.service";
import { currencyConfigDataSeeds } from "./currency_config/data";
@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly seedService: SeedService
  ) {}

  async seed(entity: string) {
    try {
      if (entity == "referral") {
        this.logger.debug("Start seeding referral!");
      } else if (process.env.ENTITY == "currency-config") {
        this.logger.debug("Start seeding currency-config!");
        await this.currencyConfig();
      } else if (process.env.ENTITY == "all") {
        this.logger.debug("Start seeding all seeders!");
        try {
          await this.currencyConfig();
        } catch (error) {
          this.logger.error(
            "Failed seeding currency config with error: ",
            error.message
          );
        }
      } else {
        throw Error("Cannot find any entities!!!");
      }
    } catch (error) {
      this.logger.error("Failed seeding with error: ", error.message);
    }
  }


  async currencyConfig() {
    await this.seedService.createCurrencyConfigs(currencyConfigDataSeeds);
    return true;
  }

}