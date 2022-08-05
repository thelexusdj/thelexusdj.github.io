var probability = Math.floor(Math.random() * 100);
if (probability === 0) {
    ( "@" + origin + " intento darle un beso a @" + destination + " pero recibió una cachetada!");
}
else if (probability <= 10) {
    ( "@" + origin + " agarro valor y le robo un besote a @" + destination);
}
else if (probability <= 50) {
    ( "@" + origin + " quiere jugar con fuego y comerse a besos a @" + destination + " . lo lograra??");
}
else if (probability <= 80) {
    ( "@" + origin + " le planto tremendo besote a @" + destination);
}
else if (probability <= 98) {
    ( "@" + origin + " se arriesga con todo y le da su mejor beso a @" + destination);
} else {
    ( "@" + origin + " ha logrado enamorar a @" + destination + " con un beso súper apasionado");
}