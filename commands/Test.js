import Command from "../../../../src/plugins/Command.js";

class Test extends Command {
  constructor() {
    super({
      name: "test",
      description: "Test command",
      aliases: [],
      args: {
        min: 0,
        max: 0,
      },
      arguments: [],
    });
  }

  run() {
    this.api.getLogger().info("Test");
  }

  runAsPlayer(client) {
    client.send("Test");
  }
}

export default Test;
