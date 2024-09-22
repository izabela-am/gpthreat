import { AI } from "./AI";
import { threatDragon } from "./ThreatDragon";

const model = new AI();
const threatModel = threatDragon();

model.prompt(threatModel);
