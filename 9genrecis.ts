function identitType<T>(val : T) : T {
    return val;
}

function genericType <T> (arr : Array<T> ) : T{

    return arr[0];

}

export {}