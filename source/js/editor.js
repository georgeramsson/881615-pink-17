var cropButt = document.querySelector('.uploading-form__filter-button--crop');
var fillButt = document.querySelector('.uploading-form__filter-button--fill');
var contrastButt = document.querySelector('.uploading-form__filter-button--contrast');
var cropRange = document.querySelector('.photo-upload__filter-range--crop');
var fillRange = document.querySelector('.photo-upload__filter-range--fill');
var contrastRange = document.querySelector('.photo-upload__filter-range--contrast');

cropButt.addEventListener('click', function() {
    if (fillButt.classList.contains('uploading-form__filter-button--active') || contrastButt.classList.contains('uploading-form__filter-button--active'))  {
      fillButt.classList.remove('uploading-form__filter-button--active');
      contrastButt.classList.remove('uploading-form__filter-button--active');
      cropButt.classList.add('uploading-form__filter-button--active');
    }
  });

fillButt.addEventListener('click', function() {
    if (cropButt.classList.contains('uploading-form__filter-button--active') || contrastButt.classList.contains('uploading-form__filter-button--active'))  {
      cropButt.classList.remove('uploading-form__filter-button--active');
      contrastButt.classList.remove('uploading-form__filter-button--active');
      fillButt.classList.add('uploading-form__filter-button--active');
    }
  });

contrastButt.addEventListener('click', function() {
    if (cropButt.classList.contains('uploading-form__filter-button--active') || fillButt.classList.contains('uploading-form__filter-button--active'))  {
      cropButt.classList.remove('uploading-form__filter-button--active');
      fillButt.classList.remove('uploading-form__filter-button--active');
      contrastButt.classList.add('uploading-form__filter-button--active');
    }
  });

cropButt.addEventListener('click', function() {
    if (fillRange.classList.contains('photo-upload__filter-range--active') || contrastRange.classList.contains('photo-upload__filter-range--active'))  {
      fillRange.classList.remove('photo-upload__filter-range--active');
      contrastRange.classList.remove('photo-upload__filter-range--active');
      cropRange.classList.add('photo-upload__filter-range--active');
    }
  });

fillButt.addEventListener('click', function() {
    if (cropRange.classList.contains('photo-upload__filter-range--active') || contrastRange.classList.contains('photo-upload__filter-range--active'))  {
      cropRange.classList.remove('photo-upload__filter-range--active');
      contrastRange.classList.remove('photo-upload__filter-range--active');
      fillRange.classList.add('photo-upload__filter-range--active');
    }
  });

contrastButt.addEventListener('click', function() {
    if (cropRange.classList.contains('photo-upload__filter-range--active') || fillRange.classList.contains('photo-upload__filter-range--active'))  {
      cropRange.classList.remove('photo-upload__filter-range--active');
      fillRange.classList.remove('photo-upload__filter-range--active');
      contrastRange.classList.add('photo-upload__filter-range--active');
    }
  });
