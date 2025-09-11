// MAP-----
const map = new Map()
map.set('IN' ,"india");
map.set('lang' ,"language");
map.set('p.o' ,"post office");
map.set('MS' ,"microsoft");
map.set('js' ,"javascript");
map.set('py' ,"python");
map.set('html' ,"hper text markup language");
console.log(map);
for (const [key , value] of map) {
    console.log(key , ':-' ,value);
}
// we dont use for in loop in map

// for in loop ---------
const myObject = {
    username : 'aditya',
    age : 22,
    
}