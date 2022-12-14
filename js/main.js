const progressDiv = document.querySelector('.progress-div'),
  progressBars = document.querySelectorAll('.progress-bar'),
  counterDiv = document.querySelector('.counter-div'),
  countersTag = document.querySelectorAll('.counter-div h3');

ScrollOut({
  targets: '.progress-div , .counter-div'
});

window.addEventListener('scroll', () => {
  if (progressDiv.dataset.scroll === 'in') {
    progressBars.forEach((bar) => {
      let valueNow = bar.getAttribute('aria-valuenow');
      bar.style.width = `${valueNow}%`;
      let counterSpan = bar.parentElement.parentElement.querySelector('.progress-value span');
      let timer = setInterval(() => {
        if (+counterSpan.textContent < valueNow) {
          counterSpan.textContent = +counterSpan.textContent + 1;
        } else {
          clearInterval(timer);
        }
      }, 400);
    });
  } else {
    progressBars.forEach((bar) => {
      bar.style.width = 0;
      bar.parentElement.parentElement.querySelector('.progress-value span').textContent = 0;
    });
  }
  // counter
  if (counterDiv.dataset.scroll === 'in') {
    countersTag.forEach((counter) => {
      let valueNow = counter.dataset.counter;
      let timer = setInterval(() => {
        if (+counter.textContent < valueNow) {
          counter.textContent = +counter.textContent + 1;
        } else {
          clearInterval(timer);
        }
      }, 400);
    });
  } else {
    countersTag.forEach((counter) => {
      counter.textContent = 0;
    });
  }
});

const filterItems = document.querySelectorAll('.list-group li'),
  listItems = document.querySelectorAll('.filter-items a'),
  filtration = (item) => {
    item.addEventListener('click', () => {
      document.querySelector('.list-group li.active').classList.remove('active');
      item.classList.add('active');
      let filteredValue = item.dataset.filter;
      let filter = (listItem) => {
        if (listItem.classList.contains(filteredValue)) {
          listItem.classList.remove('hidden');
          listItem.classList.add('active');
        } else {
          listItem.classList.remove('active');
          listItem.classList.add('hidden');
        }
      };
      listItems.forEach(filter);
    });
  };

filterItems.forEach(filtration);

// lightgallery

lightGallery(document.getElementById('lightgallery'), {});

// aos init

AOS.init();
