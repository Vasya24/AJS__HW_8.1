class Team {
    constructor() {
        this.members = new Set();
    }
    add(Character) {
      this.members.add(Character)
    }
  addAll(...Character) {
    this.members.add(Character)
 
  }
  toArray() {
    this.members = Array.from(this.members)
  }
}

export { Team }