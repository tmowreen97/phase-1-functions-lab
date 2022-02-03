// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    if (pickup<42){
        return 42-pickup
    } else if (pickup >=42){
        return pickup-42
    }
}
function distanceFromHqInFeet(block){
    if (block<42){
        return (42-block)*264
    } else if (block >=42){
        return (block-42)*264
    }
}
function distanceTravelledInFeet(start,finish){
    if (start>finish){
        return (start-finish)*264
    }
    else if (finish > start){
        return (finish-start)*264
    }
    else {
        return ('0')
    }
}
function calculatesFarePrice(start, finish){
    if (start>finish){
        let dist=(start-finish)*264
        if (dist<=400){
            return 0
        }
        if (dist<=2000){
            return (dist-400)*0.02
        }
        if (dist>2500){
            return 'cannot travel that far'
        }
        if (dist>2000){
            return 25
        }
    }
    if (finish>start){
        let dist = (finish-start)*264
        if (dist<=400){
            return 0
        }
        if (dist<=2000){
            return (dist-400)*0.02
        }
        if (dist>2500){
            return 'cannot travel that far'
        }
        if (dist>2000){
            return 25
        }
    }
}