function myFunction() {
    var a = document.getElementById("basicCheap");
    if (a.innerHTML === "$ 19.99") {
      a.innerHTML = "$ 199.99";
    } else {
      a.innerHTML = "$ 19.99";
    }

    var b = document.getElementById("proffesional");
    if (b.innerHTML ===  "$ 24.99") {
      b.innerHTML = "$ 249.99";
    } else {
      b.innerHTML = "$ 24.99";
    }

    var c = document.getElementById("master");
    if (c.innerHTML === "$ 39.99") {
      c.innerHTML = "$ 399.99";
    } else {
      c.innerHTML = "$ 39.99";
    }

  }