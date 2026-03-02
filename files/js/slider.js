const changeSlider = (targetSliderType, targetSliderIndex) => {
  if (targetSliderIndex < 0) {
    targetSliderIndex = 2;
  } else if (targetSliderIndex > 2) {
    targetSliderIndex = 0;
  } else {
    targetSliderIndex;
  }

  let targetSlider = document.querySelectorAll(
    `.stylesSliderItem[name^='slider${targetSliderType}']`
  );

  targetSlider.forEach((e) => {
    e.classList.remove("active");
  });

  targetSlider[targetSliderIndex].classList.add("active");
};

window.onload = () => {
  const radioElements = document.querySelectorAll("input[name^='sliderdot']");
  const btnElements = document.querySelectorAll("button[name^='sliderbtn']");

  radioElements.forEach((e) => {
    e.addEventListener(
      "click",
      (e) => {
        let targetSliderType = e.target.dataset.targetslider;
        let targetSliderIndex = e.target.dataset.targetindex;
        changeSlider(targetSliderType, targetSliderIndex);
      },
      false
    );
  });

  btnElements.forEach((e) => {
    e.addEventListener(
      "click",
      (e) => {
        let targetSliderType = e.target.dataset.targetslider;
        let targetSlider = document.querySelectorAll(
          `.stylesSliderItem[name^='slider${targetSliderType}']`
        );
        let targetSliderActiveIndex = Array.from(targetSlider).findIndex((i) =>
          i.classList.contains("active")
        );
        let targetSliderIndex = () => {
          let index;
          switch (e.target.dataset.arrow) {
            case "prev":
              index = targetSliderActiveIndex - 1;
              break;
            case "next":
              index = targetSliderActiveIndex + 1;
              break;
            default:
              index = targetSliderActiveIndex;
              break;
          }
          return index;
        };
        changeSlider(targetSliderType, targetSliderIndex());
      },
      false
    );
  });
};