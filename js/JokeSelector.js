class JokeSelector {
  constructor(totalGroups) {
    this.totalGroups = totalGroups;
    this.usedGroups = new Set();
  }

  selectJokeGroup() {
    if (this.usedGroups.size === this.totalGroups) {
      console.log("All joke groups have been used!");
      return null;
    }

    let selectedGroup;
    do {
      selectedGroup = Math.floor(Math.random() * this.totalGroups) + 1;
    } while (this.usedGroups.has(selectedGroup));

    this.usedGroups.add(selectedGroup);
    return selectedGroup;
  }

  resetUsedGroups() {
    this.usedGroups.clear();
  }
}
