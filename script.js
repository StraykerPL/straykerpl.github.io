var canvas = document.querySelector(".hero__canvas");
var ctx = canvas.getContext("2d");
var topics = [
  "Software Dev",
  "Operating Systems",
  "Open Source",
  "Games",
  ".NET"
];
var nodes = [];
var particles = [];
var time = 0;
var animationId = null;
var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
var allowMotion = !prefersReducedMotion.matches;

function getSceneMetrics() {
  var width = canvas.clientWidth;
  var height = canvas.clientHeight;
  var base = Math.max(1, Math.min(width, height));
  var scale = base / 420;

  return {
    width: width,
    height: height,
    base: base,
    scale: scale,
    ringRadii: [base * 0.17, base * 0.25, base * 0.345],
    ringWidths: [2 * scale, 1.5 * scale, 1 * scale],
    nodeBase: base * 0.285,
    nodeStep: base * 0.0286,
    particleMin: base * 0.14,
    particleRange: base * 0.333,
    centerOuter: base * 0.11,
    centerInner: base * 0.057,
    labelOffset: 10 * scale,
    labelYOffset: 8 * scale
  };
}

function resizeCanvas() {
  var rect = canvas.parentElement.getBoundingClientRect();
  canvas.style.width = rect.width + "px";
  canvas.style.height = rect.height + "px";
  canvas.width = Math.floor(rect.width * window.devicePixelRatio);
  canvas.height = Math.floor(rect.height * window.devicePixelRatio);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}

function initNodes() {
  var metrics = getSceneMetrics();
  nodes = topics.map(function (label, index) {
    return {
      label: label,
      angle: (Math.PI * 2 * index) / topics.length,
      radius: metrics.nodeBase + index * metrics.nodeStep,
      speed: 0.002 + index * 0.0006
    };
  });
  particles = Array.from({ length: 34 }, function (_, index) {
    return {
      angle: (Math.PI * 2 * index) / 34,
      radius: metrics.particleMin + Math.random() * metrics.particleRange,
      speed: 0.0006 + Math.random() * 0.0012,
      size: (1 + Math.random() * 2.5) * metrics.scale
    };
  });
}

function drawRings(centerX, centerY) {
  var metrics = getSceneMetrics();
  var rings = [
    { radius: metrics.ringRadii[0], width: metrics.ringWidths[0], speed: 0.003, color: "rgba(180, 210, 255, 0.35)" },
    { radius: metrics.ringRadii[1], width: metrics.ringWidths[1], speed: -0.002, color: "rgba(255, 210, 160, 0.3)" },
    { radius: metrics.ringRadii[2], width: metrics.ringWidths[2], speed: 0.0015, color: "rgba(140, 170, 220, 0.25)" }
  ];

  rings.forEach(function (ring, index) {
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(time * ring.speed + index);
    ctx.beginPath();
    ctx.setLineDash([14, 12]);
    ctx.strokeStyle = ring.color;
    ctx.lineWidth = ring.width;
    ctx.arc(0, 0, ring.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  });
  ctx.setLineDash([]);
}

function drawParticles(centerX, centerY) {
  particles.forEach(function (particle) {
    var angle = particle.angle + time * particle.speed;
    var x = centerX + Math.cos(angle) * particle.radius;
    var y = centerY + Math.sin(angle) * particle.radius;
    ctx.beginPath();
    ctx.arc(x, y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(215, 228, 255, 0.45)";
    ctx.fill();
  });
}

function draw() {
  var metrics = getSceneMetrics();
  var width = metrics.width;
  var height = metrics.height;
  ctx.clearRect(0, 0, width, height);

  var centerX = width * 0.55;
  var centerY = height * 0.52;

  drawRings(centerX, centerY);

  ctx.beginPath();
  ctx.arc(centerX, centerY, metrics.centerOuter, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255, 206, 140, 0.2)";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(centerX, centerY, metrics.centerInner, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255, 214, 140, 0.85)";
  ctx.fill();

  drawParticles(centerX, centerY);

  var points = nodes.map(function (node, index) {
    var wobble = Math.sin(time * 0.015 + index) * 8;
    var angle = node.angle + time * node.speed;
    return {
      x: centerX + Math.cos(angle) * (node.radius + wobble),
      y: centerY + Math.sin(angle) * (node.radius + wobble * 0.6),
      label: node.label,
      size: 6 + index * 0.8
    };
  });

  ctx.beginPath();
  points.forEach(function (point, index) {
    if (index === 0) {
      ctx.moveTo(point.x, point.y);
    } else {
      ctx.lineTo(point.x, point.y);
    }
  });
  ctx.closePath();
  ctx.strokeStyle = "rgba(150, 185, 235, 0.35)";
  ctx.lineWidth = 1;
  ctx.stroke();

  points.forEach(function (point) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(120, 170, 255, 0.8)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(point.x, point.y);
    ctx.strokeStyle = "rgba(255, 214, 140, 0.18)";
    ctx.stroke();

    ctx.fillStyle = "#eef4ff";
    ctx.font = "600 " + 12 * metrics.scale + "px Trebuchet MS";
    ctx.fillText(point.label, point.x + metrics.labelOffset, point.y - metrics.labelYOffset);
  });

  if (allowMotion) {
    time += 0.4;
  }
}

function setup() {
  resizeCanvas();
  initNodes();
  startAnimation();
}

window.addEventListener("resize", function () {
  resizeCanvas();
  initNodes();
});

prefersReducedMotion.addEventListener("change", function (event) {
  allowMotion = !event.matches;
  startAnimation();
});

function animate() {
  draw();
  if (allowMotion) {
    animationId = requestAnimationFrame(animate);
  } else {
    animationId = null;
  }
}

function startAnimation() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  time = 0;
  draw();
  if (allowMotion) {
    animationId = requestAnimationFrame(animate);
  }
}

function setupProjectsCarousel() {
  var arrows = document.querySelectorAll(".projects__arrow");
  var cards = document.querySelectorAll(".project-card");
  var status = document.querySelector(".projects__status");

  if (!cards.length) {
    return;
  }

  var activeIndex = 0;

  for (var i = 0; i < cards.length; i += 1) {
    if (cards[i].classList.contains("project-card--active")) {
      activeIndex = i;
      break;
    }
  }

  function updateCarousel() {
    for (var j = 0; j < cards.length; j += 1) {
      var isActive = j === activeIndex;
      cards[j].classList.toggle("project-card--active", isActive);
      cards[j].setAttribute("aria-hidden", isActive ? "false" : "true");
    }

    if (status) {
      status.textContent = "Project " + (activeIndex + 1) + " of " + cards.length;
    }
  }

  function move(direction) {
    if (direction === "next") {
      activeIndex = (activeIndex + 1) % cards.length;
    } else {
      activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    }
    updateCarousel();
  }

  for (var k = 0; k < arrows.length; k += 1) {
    arrows[k].addEventListener("click", function (event) {
      var direction = event.currentTarget.getAttribute("data-direction");
      move(direction);
    });
  }

  updateCarousel();
}

setup();
setupProjectsCarousel();
