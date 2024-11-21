let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/******************************************************************* */

let number = []; // Mảng số

// Hàm thêm số vào mảng
document.getElementById("addNumber").onclick = function () {
  let inNumber = document.getElementById("inputNumber").value * 1;
  let num;

  if (inNumber === "") {
    inNumber = 0;
    document.getElementById("pInform").innerHTML = [
      `<p>👉${number.join(", ")}</p>`,
    ];
  }

  num = inNumber;

  number.push(num);
  document.getElementById("pInform").innerHTML = [
    `<p>👉${number.join(", ")}</p>`,
  ];
};

/**
 *  Bài Tập 1: Tính tổng số dương
 *    Đầu vào:
 *      - Lấy một mảng số number từ người dùng nhập
 *    Xử lý:
 *      0. Khởi tạo biến sum = 0
 *      1. Duyệt qua từng phần tử của mảng bằng vòng lặp
 *        1.1 Kiểm tra phần tử nếu num > 0 => sum += number[i];
 *        1.2 Hoàn tất vòng lặp thu được sum
 *    Đầu ra:
 *      - Hiển thị kết quả sum ra ngoài trang web vào thẻ pInform_1
 */
document.getElementById("sumNumber").onclick = function () {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    let num = number[i];
    if (num > 0) {
      sum += number[i];
    }
  }

  document.getElementById("pInform_1").innerHTML = [
    `<p>👉Tổng số dương: ${sum} </p>`,
  ];
};

/**
 *  Bài Tập 2: Đếm số dương
 *    Đầu vào:
 *      - Lấy một mảng số number từ người dùng nhập
 *    Xử lý:
 *      0. Tạo biến count = 0;
 *      1. Duyệt qua từng phần tử của mảng bằng vòng lặp
 *        1.1 Nếu phần tử num > 0 => count++
 *        1.2 Hoàn tất vòng lặp thu được count
 *    Đầu ra:
 *      - Hiển thị kết quả count ra ngoài trang web vào thẻ pInform_2
 */
document.getElementById("countNumber").onclick = function () {
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    let num = number[i];
    if (num > 0) {
      count++;
    }
  }

  document.getElementById("pInform_2").innerHTML = [
    `<p>👉Số dương: ${count} </p>`,
  ];
};

/**
 *  Bài Tập 3: Tìm số nhỏ nhất
 *    Đầu vào:
 *      - Lấy một mảng số number từ người dùng nhập
 *    Xử lý:
 *      0. Khởi tạo biến min = number[0];
 *      1. Duyệt qua từng phần tử của mảng bằng vòng lặp
 *        1.1 Nếu phần tử number[i] < min => min = number[i];
 *        1.2 Hoàn tất vòng lặp thu được min
 *    Đầu ra:
 *      - Hiển thị kết quả min ra ngoài trang web vào thẻ pInform_3
 */
document.getElementById("findMinNumber").onclick = function () {
  let min = number[0];

  for (let i = 1; i < number.length; i++) {
    if (number[i] < min) {
      min = number[i];
    }
  }

  document.getElementById("pInform_3").innerHTML = [
    `<p>👉Số nhỏ nhất: ${min} </p>`,
  ];
};

/**
 *  Bài Tập 4: Tìm số dương nhỏ nhất
 *    Đầu vào:
 *      - Lấy một mảng số number từ người dùng nhập
 *    Xử lý:
 *      0. Khởi tạo mảng positiveNumber = [];
 *      1. Duyệt qua mảng ban đầu number
 *        1.1 Nếu number[i] > 0 => thêm vào mảng positiveNumber
 *      2. Nếu mảng positiveNumber === 0 => Hiển thị ra thẻ pInform_4 là Không có số dương trong mảng
 *      3. Nếu mảng positiveNumber > 0
 *        3.1 Tạo biến minPositive = positiveNumber[0];
 *        3.2 Duyệt qua từng phần tử của mảng bằng vòng lặp
 *        3.3 Nếu positiveNumber[i] < minPositive => minPositive = positiveNumber[i];
 *        3.4 Hoàn tất vòng lặp thu được minPositive
 *    Đầu ra:
 *      - Hiển thị kết quả minPositive ra ngoài trang web vào thẻ pInform_4
 */
document.getElementById("findMinPositiveNumber").onclick = function () {
  let positiveNumber = [];
  for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      positiveNumber.push(number[i]);
    }
  }

  if (positiveNumber.length === 0) {
    document.getElementById("pInform_4").innerHTML = [
      `<p>👉Không có số dương trong mảng</p>`,
    ];
    return;
  }

  let minPositive = positiveNumber[0];
  for (let i = 1; i < positiveNumber.length; i++) {
    if (positiveNumber[i] < minPositive) {
      minPositive = positiveNumber[i];
    }
  }

  document.getElementById("pInform_4").innerHTML = [
    `<p>👉Số dương nhỏ nhất: ${minPositive} </p>`,
  ];
};

/**
 *  Bài Tập 5: Tìm số chẵn cuối cùng
 *    Đầu vào:
 *      - Lấy một mảng số number từ người dùng nhập
 *    Xử lý:
 *      0. Khởi tạo biến lastEven = null;
 *      1. Duyệt qua từng phần tử của mảng bằng vòng lặp
 *        1.1 Nếu number[i] % 2 === 0 => lastEven = number[i];
 *      2. Sau khi kết thúc vòng lặp
 *        2.1 Nếu lastEven === null => Hiển thị ra thẻ pInform_5 là Số chẵn cuối cùng: 0
 *        2.2 Ngược lại sẽ thu được lastEven
 *    Đầu ra:
 *      - Hiển thị kết quả lastEven ra ngoài trang web vào thẻ pInform_5
 */
document.getElementById("findSmallestPositive").onclick = function () {
  let lastEven = null;

  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      lastEven = number[i];
    }
  }

  if (lastEven === null) {
    document.getElementById("pInform_5").innerHTML = [
      `<p>👉Số chẵn cuối cùng: 0</p>`,
    ];
  } else {
    document.getElementById("pInform_5").innerHTML = [
      `<p>👉Số chẵn cuối cùng: ${lastEven}</p>`,
    ];
  }
};

/**
 *  Bài Tập 6: Đổi chỗ 2 giá trị trong mảng
 *    Đầu vào:
 *      - Lấy một mảng số number từ người dùng nhập
 *      - Lấy 2 chỉ số người dùng nhập từ (index1, index2)
 *    Xử lý:
 *      0. Khởi tạo biến tạm temp
 *      1. Sử dụng biến tạm temp để đổi giá trị tại index1 và index2
 *        1.1 Gán giá trị tại index1 vào biến tạm.
 *        1.2 Gán giá trị tại index2 vào vị trí index1
 *        1.3 Gán giá trị biến tạm vào vị trí index2
 *    Đầu ra:
 *      - Hiển thị kết quả number đã được đổi vị trí ra ngoài trang web vào thẻ pInform_6.
 */
document.getElementById("swapElement").onclick = function () {
  let index1 = document.getElementById("index1").value * 1;
  let index2 = document.getElementById("index2").value * 1;

  let temp;
  for (let i = 0; i < number.length; i++) {
    if (i === index1) {
      number[i] = temp;
      number[index2] = number[i];
    }
    if (i === index2) {
      temp = number[i];
    }
  }

  document.getElementById("pInform_6").innerHTML = [
    `<p>👉Mảng sau khi đổi: ${number}</p>`,
  ];
};

/**
 *  Bài Tập 7: Sắp xếp tăng dần
 *    Đầu vào:
 *      - Lấy một mảng số number từ người dùng nhập
 *    Xử lý:
 *      0. Khởi tạo vòng lặp bên ngoài let i = 0 trừ phần tử cuối
 *      1. Khởi tạo vòng lặp bên trong let j = i + 1
 *        1.1 Nếu number[i] > number[j]
 *        1.2 Gán giá trị biến tạm temp1 = number[i];
 *        1.3 Gán giá trị number[i] = number[j];
 *        1.4 Gán giá trị biến tạm temp1 = number[j];
 *      2. Sau khi kết thúc vòng lặp thu được mảng sắp xếp tăng dần
 *    Đầu ra:
 *      - Hiển thị kết quả mảng đã được sắp xếp tăng dần ra ngoài trang web vào thẻ pInform_7
 */
document.getElementById("sortAscending").onclick = function () {
  for (let i = 0; i < number.length - 1; i++) {
    for (let j = i + 1; j < number.length; j++) {
      if (number[i] > number[j]) {
        const temp1 = number[i];
        number[i] = number[j];
        number[j] = temp1;
      }
    }
  }

  document.getElementById("pInform_7").innerHTML = [
    `<p>👉Mảng sau khi sắp xếp: ${number.join(", ")}</p>`,
  ];
};

/**
 *  Bài Tập 8: Tìm số nguyên tố đầu tiên
 *    Đầu vào:
 *      - Lấy một mảng số number từ người dùng nhập
 *    Xử lý:
 *      0. Kiểm tra số nguyên tố với hàm isPrime(num)
 *      1. Nếu num <= 1 => trả về false
 *      2. Duyệt từ 2 đến căn bậc hai của num:
 *        2.1 Nếu num % i === 0 => trả về false
 *        2.2 Ngược lại sẽ là true => Số nguyên tố
 *      3. khởi tạo biến firstPrime = null;
 *        3.1 Duyệt qua từng phần tử của mảng
 *        3.2 Nếu isPrime(number[i]) === true => firstPrime = number[i];
 *        3.3 Dừng vòng lặp break
 *    Đầu ra:
 *      1. Nếu firstPrime !== null => Hiển thị kết quả firstPrime ra ngoài trang web vào thẻ pInform_8
 *      2. Nếu firstPrime === null => Hiển thị thông báo vào thẻ pInform_8 là "Không có số nguyên tố trong mảng."
 */
document.getElementById("findFirstPrimeNumber").onclick = function () {
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  let firstPrime = null;
  for (let i = 0; i < number.length; i++) {
    if (isPrime(number[i])) {
      firstPrime = number[i];
      break;
    }
  }

  if (firstPrime !== null) {
    document.getElementById("pInform_8").innerHTML = [
      `<p>👉Số nguyên tố đầu tiên: ${firstPrime}</p>`,
    ];
  } else {
    document.getElementById("pInform_8").innerHTML = [
      `<p>👉Không có số nguyên tố trong mảng.</p>`,
    ];
  }
};

/**
 *  Bài Tập 9: Đếm số nguyên
 *    Đầu vào:
 *      - Người dùng nhập từng số vào ô nhập liệu (inputNumber_1) và thêm vào mảng bằng nút "addNumber_1"
 *      - Khi nhấn nút "countIntegers", mảng number1 sẽ được kiểm tra
 *    Xử lý:
 *      0. Thêm số vào mảng number1 = [];
 *      1. Đếm số nguyên trong mảng number1
 *        1.1 Khởi tạo biến count1 = 0;
 *        1.2 Duyệt qua từng phần tử trong mảng number1.
 *        1.3 Sử dụng hàm Number.isInteger() để kiểm tra phần tử có phải số nguyên không
 *          1.3.1 Nếu đúng => count1++
 *          1.3.2 Nếu sai thì count1 không tăng
 *    Đầu ra:
 *       - Hiển thị kết quả count1 ra ngoài trang web vào thẻ pInform_9_2
 */
let number1 = [];
document.getElementById("addNumber_1").onclick = function () {
  let inNumber1 = document.getElementById("inputNumber_1").value * 1;
  let num1;

  if (inNumber1 === "") {
    inNumber1 = 0;
    document.getElementById("pInform_9_1").innerHTML = [
      `<p>👉${number1.join(", ")}</p>`,
    ];
  }

  num1 = inNumber1;

  number1.push(num1);
  document.getElementById("pInform_9_1").innerHTML = [
    `<p>👉${number1.join(", ")}</p>`,
  ];
};

document.getElementById("countIntegers").onclick = function () {
  let count1 = 0;
  for (let i = 0; i < number1.length; i++) {
    if (Number.isInteger(number1[i])) {
      count1++;
    }
  }

  document.getElementById("pInform_9_2").innerHTML = [
    `<p>👉Số nguyên: ${count1}</p>`,
  ];
};

/**
 *  Bài Tập 10: So sánh số lượng số âm và dương
 *    Đầu vào:
 *      - Lấy một mảng số number từ người dùng nhập
 *    Xử lý:
 *      0. Khởi tạo 2 biến đếm positiveCount = 0 và negativeCount = 0
 *      1. Duyệt qua từng phần tử của mảng
 *        1.1 Nếu number[i] > 0 => positiveCount++;
 *        1.2 Nếu number[i] < 0 => negativeCount++;
 *      2. So sánh số lượng số dương và số âm
 *        2.1 Nếu positiveCount > negativeCount => "Số dương > Số âm"
 *        2.2 Nếu positiveCount < negativeCount => "Số âm > Số dương"
 *        2.3 Nếu positiveCount = negativeCount => "Số âm = Số dương"
 *    Đầu ra:
 *      - Hiển thị kết quả so sánh số dương và số âm ra ngoài trang web vào thẻ pInform_10
 */
document.getElementById("comparePositiveAndNegative").onclick = function () {
  let positiveCount = 0;
  let negativeCount = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      positiveCount++;
    } else if (number[i] < 0) {
      negativeCount++;
    }
  }

  if (positiveCount > negativeCount) {
    document.getElementById("pInform_10").innerHTML = [
      `<p>👉Số dương > Số âm</p>`,
    ];
  } else if (positiveCount < negativeCount) {
    document.getElementById("pInform_10").innerHTML = [
      `<p>👉Số âm > Số dương</p>`,
    ];
  } else {
    document.getElementById("pInform_10").innerHTML = [
      `<p>👉Số âm = Số dương</p>`,
    ];
  }
};
