// tslint:disable:semicolon
export class DateModel extends Date {
  day = 18;
  month = 10;
  year = 2020;
  fullDate = new Date()
  constructor(d?: any ){
    super(d)
    this.initialize(d)
  }

  initialize(d:   Date|any) {
    if (d && d["day"] && d["year"] && d["month"]) {
      this.day = d["day"];
      this.month = d["month"];
      this.year = d["year"];
    } else {
      try {
        this.fullDate = new Date(d);
        this.day = this.fullDate.getDate();
        this.year = this.fullDate.getFullYear();
        this.month = this.fullDate.getMonth();
      } catch (e) { }
    }
  }

  formatFullDate() {
    return this.fullDate.toISOString()
  }

  formatDate() {
    const mm = this.month + 1;
    const dd = this.day;
    return [this.year, (mm > 9 ? "" : "0") + mm, (dd > 9 ? "" : "0") + dd].join(
      "-"
    );
  }
  /**
   * 
   * @param days  number numbers of days to shift the date 
   * @returns DateModel
   */
  shiftDate(days: number) {
    const milliSecInOneDay = 1000 * 60 * 60 * 24
    this.fullDate = new Date(this.fullDate.getTime() + days * milliSecInOneDay)
    this.initialize(this.fullDate)
    return this
  }

  getFullDate() {
    return this.fullDate
  }

  updateDate(d: any) {
    const newDate = new Date(d)
    this.fullDate.setDate(newDate.getDate())
    this.fullDate.setMonth(newDate.getMonth())
    this.fullDate.setFullYear(newDate.getFullYear())

  }

  loadFromDate(d: Date) {
    this.year = d.getFullYear();
    this.month = d.getMonth();
    this.day = d.getDay();
  }
  serialize() {
    return { year: this.year, month: this.month, day: this.day };
  }
}
