Helyfoglaló

A csatolt ábrán egy színházi nézőtér sematikus ábrája látható. Színkóddal jelöltük, hogy az egyes helyek mennyibe kerülnek. A nézőtér zónákra van osztva (pl “Karzat közép”, “Jobb 1-es páholy”,”Aauditorium”, stb). Két hely akkor tekinthető szomszédosnak, ha azonos zónában és azonos sorban találhatóak, egymás mellett.
Készíts egy programot egy általad választott JS ökoszisztémában, mely az alábbiakat valósítja meg:
• Bemenő paramétere, hogy hány hely foglalt jelenleg. Ez minimum az összes hely 20 százaléka kell hogy legyen. Véletlenszerűen dőljön el, hogy pontosan mely helyek foglaltak.
• Bemenő paraméterként legyen megadható, hogy hány fő számára keresünk szomszédos helyeket (minimum 2, maximum 8).
• A feladat az elérhető legjobb alternatíva megtalálása.
o Minél magasabb árkategóriába tartozik egy hely, annál jobbnak számít.
o Azonos árkategóriájú jegyek esetén a zónák preferencia sorrendje számít: Az auditorium a leginkább preferált, majd a Karzat középső része, majd a jobb és baloldali karzat (azonos preferenciával), legvégül a páholyok (szintén azonos preferenciával).
o Az azonos zónában lévő, azonos árkategóriájú helyek közül az számít jobbnak, ami a színpadhoz közelebb eső sorban van
o az azonos sorban lévők közül a középen lévők preferáltak.
• Az elvárt kimenet a feltételeknek megfelelő alternatíva megadása oly módon, hogy megadjuk a zónát, a sor számát és az ülések sorszámait (a helyek sorokon belüli számozást az ábra tartalmazza, a sorok számozása a színpadtól kezdődik és zónánként 1-től indul).
• Több, a feltételeknek megfelelő alternatíva esetén bármelyik elfogadható megoldásként.
Amit még elvárunk:
• Minimális dokumentáció,
• Teszt terv a programhoz (konkrét teszt implementációra nincs szükség),
• Grafikus felület a programhoz nem elvárás, de opcionálisan adható.
A fejlesztéshez felhasználható tetszőleges library, de elsősorban a Te kódodra vagyunk kíváncsiak.
