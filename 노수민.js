function exampleOne(first, second, dataType) {
  if(typeof(first) !== dataType &&typeof(second) !== dataType) {
    return new Error(`매개변수 first, second는 모두 ${dataType} 타입이어야 합니다.`);
  }
}

function arrayLengthEven(array) {
  if(array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function isExampleTwo(first, second) {

  exampleOne(first, second);

  let booleanResult;

  if(first < second) {
    booleanResult = true;
  } else {
    booleanResult = false;
  }

  if(typeof(booleanResult) === 'boolean') {
    return booleanResult;
  } else {
    return new Error("조건식이 boolean이 아니라서 리턴 하지 못했습니다.")
  }
}

let basicData = [4, 6, 23, 5, 94, 35, 44, 66];

function exampleThree(array, functionOne, functionTwo) {
  // 매개변수의 함수 두개는 데이터타입이 모두 함수여야 함
  // 매개변수 array의 모든 원소는 숫자 정수여야 함
  // 매개변수 array의 배열 길이는 짝수여야 함, 홀수라면 10을 추가하여 짝수로 만듦
  exampleOne(functionOne, functionTwo, "function");
  arrayCheck(array);
  if(arrayLengthEven(array) === false) {
    array.push(10);
  }

  let arrayResult = [[null, null], [null, null], [null, null], [null, null]];
  // 매개변수 array는 배열의 순서 한쌍 씩 값의 크기를 비교하여
  // 비교한 작은 값은 arrayResult의 원소배열의 0번째
  // 큰 값은 arrayResult의 원소배열의 1번째에 넣어준다.
  // console.log(array[0])
  // console.log(array[1])
  // console.log("console 확인 중")

  for(let i = 0; i < array.length / 2; i++){
    // console.log(i + "번째 반복 중 :" + 2*i);
    // console.log(array[2*i]);
    if(isExampleTwo(array[2*i], array[2*i + 1])) {
      arrayResult[i][0] = array[2*i];
      arrayResult[i][1] = array[2*i+1];
    } else {
      arrayResult[i][0] = array[2*i+1];
      arrayResult[i][1] = array[2*i];
    }
  }

  return arrayResult;
}

console.log(exampleThree(basicData, exampleOne, isExampleTwo))


// 배열의 요소 체크 함수
function arrayCheck(array) {
  for(let i = 0; i < array.length; i++) {
    if(typeof(array[i] !== 'number')) {
      return new Error("입력한 배열의 요소가 정수가 아닙니다")
    }
  }
}

