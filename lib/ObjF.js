const CALLBACK_HELL_LIMIT = 32;

module.exports = class ObjF {

    //Returns a copy an object
    static copy(obj) {

        //Return the input if not an object
        if ("object" != typeof obj) return obj;

        //The object to return
        let newObj = null;

        //Check if the object is an array
        if (Array.isArray(obj)) {

            //Create a new array
            newObj = [];

            //Loop through the array
            for (let i = 0; i < obj.length; i++) {

                //Copy the contents of the array into the new array
                newObj.push(this.copy(obj[i]));

            }

        } else {

            //Loop through the keys
            for (let key in obj) {

                //Create a new object
                newObj = {};

                //Copy the contents of the key into the new object
                newObj[key] = this.copy(obj[key]);

            }
        }

        //Return the new object
        return newObj;
    }

    static merge() {

    }

    static differences() {

    }

    static similarities() {

    }

}