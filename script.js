function createData(obj) {
 
    var data = {};
    
    return{
        get: function(key){
            return data[key] || null;
        },
        set: function(key, value){
            if(key && value){
                data[key] = value;
            }
        }

    };
}
 
var data = createData({});
 
data.set("name", "Mateusz");
 
console.log( data.get("name") );