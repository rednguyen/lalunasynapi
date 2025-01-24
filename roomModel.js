class RoomSchema {
    constructor(roomRateID, availability, rate, date) {
        this.roomRateID = roomRateID;
        this.availability = availability;
        this.rate = rate;
        this.date = date;
        this.occ = 0;
        this.barPrice = 0;
        this.priceValidation = false;
        this.season = "low";
  }
}


module.exports = RoomSchema;