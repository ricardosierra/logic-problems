import Miojo from './Miojo';

var timeAmpulhetaA = process.argv[2];
var timeAmpulhetaB = process.argv[3];
var timeToCookMiojo = process.argv[4];

var makeMiojinho = new Miojo();
makeMiojinho.timeToCookMiojo = timeToCookMiojo;
makeMiojinho.timeAmpulhetaA = timeAmpulhetaA;
makeMiojinho.timeAmpulhetaB = timeAmpulhetaB;

process.stdout.write('Total time to make your miojinho: '+makeMiojinho.returnTotalTime()+' minutes!');