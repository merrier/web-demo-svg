console.log('%c/**\n* Baidu Bear\n* Long may the sun shine :)\n*\n* @author Owen\n* @email  ouyangxiangyue@baidu.com\n* @github github/numerhero\n* @date   2017-02-09\n*/', 'color: #E74C3C; font-size: 16px; font-weight: 600');

+function () {
  let oNose = $('.nose');
  let oHeader = $('.header');
  let oFace = $('.face');
  let oLeyeWrap = $('.l-eye-wrap');
  let oLeyeFace = $('.l-eye-face', oLeyeWrap);
  let oReyeWrap = $('.r-eye-wrap');
  let oReyeFace = $('.r-eye-face', oReyeWrap);
  let oLearWrap = $('.l-ear-wrap');
  let oRearWrap = $('.r-ear-wrap');
  let oLear     = $('.l-ear');
  let oRear     = $('.r-ear');
  let oLearHole = $('.l-ear-hole');
  let oRearHole = $('.r-ear-hole');
  let oMasks    = $$('.ear-hole-mask');
  let oEyes     = $$('.eye');
  let oEars     = $$('.ear');
  let oEarHole  = $$('.ear-hole');

  let process = Promise.resolve();

  process.then(() => {
    // 鼻子先显现出来
    oNose.classList.add('show');
    return Sleep(600); // 600ms 后进行第二步操作
  })
    .then(() => {
    // 熊嘴脸显现出来
    oFace.classList.add('show');
    return Sleep(600); // 600ms 后进行第三步操作
  })
    .then(() => {
    // 嘴脸略微变化，同时头部显现
    oFace.classList.add('face-mor');
    oHeader.classList.add('show');
    return Sleep(600); // 600ms 后进行第四步操作
  })
    .then(() => {
    // 鼻子动画开始动，同时两眼分别从两个方向移动
    oNose.classList.add('nose-mor');
    oLeyeWrap.classList.add('l-eye-wrap-mor');
    oReyeWrap.classList.add('r-eye-wrap-mor');
    return Sleep(300); // 300ms 后进行第五步操作
  })
    .then(() => {
    // 鼻子运动为最终形态
    oNose.classList.add('nose-end');
    return Sleep(900); // 900ms 后进行第六步操作
  })
    .then(() => {
    // 两只眼睛开始运动
    oLeyeWrap.classList.add('eye-mor');
    oReyeWrap.classList.add('eye-mor');
    return Sleep(600); // 600ms 后进行第七步操作
  })
    .then(() => {
    // 两只耳朵开始从眼睛中移动出来
    oLearWrap.classList.add('l-ear-wrap-mor');
    oRearWrap.classList.add('r-ear-wrap-mor');
    return Sleep(1000); // 1000ms 后进行第八步操作
  })
    .then(() => {
    // 两只耳朵开始形变
    oLear.classList.add('ear-mor');
    oRear.classList.add('ear-mor');
    return Sleep(1800); // 1800ms 后进行第九步操作
  })
    .then(() => {
    // 让耳洞部分的遮挡物显现
    [].forEach.call(oMasks, (t) => t.classList.add('op-show'));
    return Sleep(100); // 100ms 后进行第十步操作
  })
    .then(() => {
    // 两只眼脸和耳洞同时变化
    oLeyeFace.classList.add('show');
    oReyeFace.classList.add('show');
    oLearHole.classList.add('l-ear-hole-mor');
    oRearHole.classList.add('r-ear-hole-mor');
    return Sleep(800); // 800ms 后进行第三步操作
  })
    .then(() => {
    // 运动完毕，将所有的transition 清除，保证缩放的时候不会露馅儿~
    [].forEach.call(oEyes, (t) => {
      t.style.transition = '0s';
    });

    [].forEach.call(oEars, (t) => {
      t.style.transition = '0s';
    });

    [].forEach.call(oEarHole, (t) => {
      t.style.transition = '0s';
    })

    oLeyeWrap.style.transition = '0s';
    oReyeWrap.style.transition = '0s';
    oFace.style.transition = '0s';
    oLearWrap.style.transition = '0s';
    oRearWrap.style.transition = '0s';
  })
}()

function $(v,d) {
  d = d || document;
  return d.querySelector(v);
}

function $$(v,d) {
  d = d || document;
  return d.querySelectorAll(v);
}

function Sleep(timeout) {
  return new Promise(function(resolve) {
    setTimeout(function () {
      resolve();
    },timeout);
  });
}