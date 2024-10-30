// tab
// const tabs = document.querySelectorAll(".tab");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", function () {
//     tabs.forEach((t) => t.classList.remove("active")); // Xóa class active của tất cả tab
//     this.classList.add("active"); // Thêm class active cho tab đã chọn
//   });
// });

// reset
function resetSelects() {
  // Lấy tất cả các thẻ select có class "my-select" và thiết lập lại giá trị của chúng
  var selects = document.getElementsByClassName("my-select");
  for (var i = 0; i < selects.length; i++) {
    selects[i].selectedIndex = 0; // Đặt lại về tùy chọn mặc định (tùy chọn đầu tiên)
  }
}

///////
