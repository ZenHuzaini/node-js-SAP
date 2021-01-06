module.exports = class StatusController {
  constructor() {
    this.status = [
      { level: 1, message: "develop new app to nodejs", completed: true },
    ];
    this.getRecentLearnStatus = this.getRecentLearnStatus.bind(this);
  }

  getRecentLearnStatus(req, res) {
    return res.status(200).send(this.status);
  }
};
