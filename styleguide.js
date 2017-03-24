'use strict';

/*
 * ОГЛАВЛЕНИЕ:
 * 1. стайлгайд по ES6-модулям
 * 2. стайлгайд по ES5-модулям (упрощенный вариант без лишних отступов)
 */

/*
 * "маргины" есть у:
 * - функций,
 * - циклов,
 * - вызова методов (принимающих коллбэк функции),
 * - описания методов внутри классов,
 * - условных операторов с прилегающим блоком кода (при этом конструкцию else if {} считаем блоком),
 * - любых комментариев
 *
 * "паддинги" есть у:
 * - функций, используемых в качестве экспортируемых модулей (IIFE, window., module.exports, export и т.д.),
 * - функций-конструкторов,
 * - классов,
 * - структур данных (Set, Map), либо объектов, используемых в таком качестве
 *
 * все остальное, не попавшее под вышеуказанные условия, внешних и внутренних отступов не имеет
 *
 */

window.externalModule = function () {

  function SomeClass() {

    this.somePropOne = 1;
    this.somePropTwo = 2;

    this.getPropOne = function () {
      return this.somePropTwo;
    };

  }

  var someArr = ['some value'];
  var anotherArr = [];
  var objOfSomeClass = new SomeClass();
  objOfSomeClass.getPropOne();

  var someInternalFn = function (param) {
    param[param.length] = 'one another';

    if (param[0] === 'some') {
      param.push('value');

    } else if (param[0] === 'value') {
      param.push('value');

    } else {
      param.push('something else');
    }

    param[param.length] = 'one another';
    param[param.length] = 'two another';
  };

  someInternalFn(someArr);
  someArr[someArr.length] = '3 another';
  someArr[someArr.length] = '4 another';

  // ADD 5 and 6 in someArr array (Comment example)

  someArr[someArr.length] = '5 another';
  someArr[someArr.length] = '6 another';

  someArr.forEach(function (elem, i) {
    anotherArr[i] = elem;
  });

};
