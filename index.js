import { Base } from "../../../src/base/BasePlugin.js";
import fs from "fs";

class Example extends Base {
  constructor() {
    super({
      name: "Example",
      srvVersion: [1, 19, 50],
      version: [1, 0, 0],
    });
  }

  async onEnable() {
    const cmds = fs.readdirSync(`./leaf/plugins/${this.options.name}/commands`);
    for (const name of cmds) {
      const cmd = new (await import(`./commands/${name}`)).default();
      cmd.execute();
    }
  }
}

export default Example;
