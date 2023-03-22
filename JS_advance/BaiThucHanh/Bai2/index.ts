let spacecraftName: string = 'Determination';
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number	= 384400;
let milesPerKilometer: number = 0.621
const timeToMars = Math.round(kilometersToMars / speedMph);

console.log(`${spacecraftName} would take ${timeToMars} days to get to Mars`);

function goToLocation(distance: number): number {
  let milesAway: number = distance * milesPerKilometer;
  const hours: number = milesAway / speedMph;
  return hours;
}

class Spacecraft {
  public milesPerKilometer: number = 0.621;
  public name: string;
  public speedMph: number;

  constructor(name: string, speedMph: number) {
    this.name = name;
    this.speedMph = speedMph;
  }

  getDaysToLocation(distancs: number) : number {
    let milesAway: number = distancs * milesPerKilometer;
    return milesAway / speedMph;
  }
}

module.exports = Spacecraft;