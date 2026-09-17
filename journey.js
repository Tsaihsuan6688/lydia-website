const tradeButton = document.querySelector(".node-trade");
const detail = document.querySelector("#journey-detail");
const universityButton = document.querySelector(".node-university");

universityButton.addEventListener("click", function () {
  selectNode(universityButton);

  showSkills(["Literature & arts", "Economics & accounting"]);

  showDetail(`LANGUAGES, LITERATURE & ART
I studied Foreign Languages and Literature, with courses in Western art and British and American literary history.

BEYOND MY MAJOR
My interests also took me into microeconomics, macroeconomics, and intermediate accounting, alongside German and business Japanese.

WHAT STAYS WITH ME
These subjects remain part of my curiosity about culture, business, and how people see the world.`);
});

tradeButton.addEventListener("click", function () {
  selectNode(tradeButton);

  showSkills([
    "Product development coordination",
    "Designer & supplier communication"
  ]);

  detail.replaceChildren();

  const heading = document.createElement("h2");
  heading.textContent = "BEHIND THE PRODUCT";

  const intro = document.createElement("p");
  intro.textContent =
    "From sample reviews to product images, packaging, and delivery coordination—explore the work behind the product.";

  const choices = document.createElement("div");
  choices.className = "skill-tags";

  const storyPanel = document.createElement("div");
  storyPanel.id = "trade-story";
  storyPanel.hidden = true;

  const stories = [
    {
      label: "From sample to approval",
      title: "FROM SAMPLE TO APPROVAL",
      text:
        "I exchanged emails with US designers to confirm product details, checked samples against color standards, and took part in sample review meetings at different stages of development. This work involved keeping track of feedback and the details that still needed confirmation before moving forward."
    },
    {
      label: "Product images & packaging",
      title: "GETTING THE DETAILS READY",
      text:
        "I photographed product samples, coordinated background removal with our in-house designer, and uploaded the finished product images. I also confirmed bulk-production packaging details. Product styles and packaging changed with each seasonal program, so these checks were a recurring part of the work."
    },
    {
      label: "Pricing & delivery",
      title: "KEEPING DELIVERY MOVING",
      text:
        "I negotiated pricing with factories and followed up on order and production progress across suppliers in China and Vietnam. Our shipping team handled shipping arrangements, while I also kept track of sailing schedules as part of coordinating delivery timelines."
    }
  ];

  let openStory = null;
  const storyButtons = [];

  stories.forEach(function (story, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = story.label + " →";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", "trade-story");

    button.addEventListener("click", function () {
      const closing = openStory === index;

      // 先重設三個按鈕
      storyButtons.forEach(function (item, itemIndex) {
        item.textContent = stories[itemIndex].label + " →";
        item.setAttribute("aria-expanded", "false");
      });

      storyPanel.replaceChildren();

      if (closing) {
        openStory = null;
        storyPanel.hidden = true;
        return;
      }

      // 顯示這次選到的故事
      openStory = index;
      button.textContent = story.label + " −";
      button.setAttribute("aria-expanded", "true");

      const title = document.createElement("h2");
      title.textContent = story.title;

      const paragraph = document.createElement("p");
      paragraph.textContent = story.text;

      storyPanel.append(title, paragraph);
      storyPanel.hidden = false;
    });

    storyButtons.push(button);
    choices.append(button);
  });

  detail.append(heading, intro, choices, storyPanel);
});
const equipmentButton = document.querySelector(".node-equipment");
const studyButton = document.querySelector(".node-study");

equipmentButton.addEventListener("click", function () {
  selectNode(equipmentButton);

  showSkills([
    "Cross-functional coordination",
    "Order-to-cash coordination",
    "Process improvement"
  ]);

  detail.replaceChildren();

  const heading = document.createElement("h2");
  heading.textContent = "CONNECTING PEOPLE & PROCESSES";

  const intro = document.createElement("p");
  intro.textContent =
    "At Shuz Tung, I supported customized automation equipment projects for semiconductor and electronics customers. My work also extended to intercompany sales coordination and employee welfare committee projects.";

  const choices = document.createElement("div");
  choices.className = "skill-tags";

  const storyPanel = document.createElement("div");
  storyPanel.id = "equipment-story";
  storyPanel.hidden = true;

  const stories = [
    {
      label: "Equipment delivery",
      title: "KEEPING TEAMS ALIGNED",
      paragraphs: [
        "I followed up with procurement on component lead times and worked with R&D and operations to clarify requirements and outstanding items that could affect equipment delivery.",
        "Alongside internal follow-up, I communicated progress to customers and responded to their concerns. I also prepared operational and sales reports covering shipment status, revenue progress, and execution risks for management review."
      ]
    },
    {
      label: "Intercompany receivables",
      title: "FOLLOWING THROUGH ON LONG-OUTSTANDING PAYMENTS",
      paragraphs: [
        "I handled internal sales coordination with our Kunshan subsidiary, including follow-up on intercompany receivables.",
        "Through communication and follow-up, I helped recover payments that had remained outstanding for years."
      ]
    },
    {
      label: "Rethinking the annual celebration",
      title: "FROM MANUAL STEPS TO A SHARED SYSTEM",
      paragraphs: [
        "As secretary of the employee welfare committee, I recorded meeting minutes and reminded colleagues to apply for their benefits. Our committee also redesigned the annual celebration's ceremony flow and award presentation routes.",
        "We worked with IT to replace the paper-based raffle and time-consuming manual Excel entry with an online system. I helped communicate requirements and revision requests, including matching employees with their employee IDs.",
        "The work also involved coordinating with finance so the system could retain printable records and support audit requirements. A subsidiary later adopted the system developed by IT."
      ]
    }
  ];

  let openStory = null;
  const storyButtons = [];

  stories.forEach(function (story, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = story.label + " →";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", "equipment-story");

    button.addEventListener("click", function () {
      const closing = openStory === index;

      storyButtons.forEach(function (item, itemIndex) {
        item.textContent = stories[itemIndex].label + " →";
        item.setAttribute("aria-expanded", "false");
      });

      storyPanel.replaceChildren();

      if (closing) {
        openStory = null;
        storyPanel.hidden = true;
        return;
      }

      openStory = index;
      button.textContent = story.label + " −";
      button.setAttribute("aria-expanded", "true");

      const title = document.createElement("h2");
      title.textContent = story.title;
      storyPanel.append(title);

      story.paragraphs.forEach(function (text, paragraphIndex) {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;

        if (paragraphIndex > 0) {
          paragraph.style.marginTop = "16px";
        }

        storyPanel.append(paragraph);
      });

      storyPanel.hidden = false;
    });

    storyButtons.push(button);
    choices.append(button);
  });

  detail.append(heading, intro, choices, storyPanel);
});
studyButton.addEventListener("click", function () {
  selectNode(studyButton);

  showSkills([
    "Operations & supply chain",
    "Business analytics"
  ]);

  showDetail(`CONNECTING EXPERIENCE WITH ANALYSIS
At USC, I’m building on my experience in trade and equipment coordination through graduate study in Global Supply Chain Management.

OPERATIONS & DECISIONS
Courses in operations, supply chain management, and data analysis are helping me revisit the questions I encountered at work: what causes delays, how teams plan around uncertainty, and how to compare possible decisions.

APPLYING THE TOOLS
I’m interested in applying these approaches to industries I care about—examining an operational problem, developing a proposal, and explaining what it could improve for the business.`);
const projectsLink = document.createElement("a");
projectsLink.className = "journey-link";
projectsLink.href = "projects.html";
projectsLink.textContent = "Explore my projects →";

detail.append(projectsLink);
});
function selectNode(button) {
  const nodes = document.querySelectorAll(".map-node");

  document.querySelector(".journey-map")
    .classList.remove("show-equipment-skills");

  nodes.forEach(function (node) {
    node.classList.remove("is-selected");
    node.setAttribute("aria-pressed", "false");
  });

  button.classList.add("is-selected");
  button.setAttribute("aria-pressed", "true");

  const visitedCount =
    document.querySelectorAll(".map-node.is-visited").length;

  document.querySelector("#journey-progress").textContent =
    "Explored " + visitedCount + " of " + nodes.length + " stops";
}
function showDetail(text) {
  detail.replaceChildren();

  const sections = text.trim().split("\n\n");

  sections.forEach(function (section) {
    const lines = section.split("\n");

    const heading = document.createElement("h2");
    heading.textContent = lines[0];

    const paragraph = document.createElement("p");
    paragraph.textContent = lines.slice(1).join(" ");

    detail.append(heading, paragraph);
  });
}function showSkills(skills) {
  const container = document.querySelector("#journey-skills");
  container.replaceChildren();

  skills.forEach(function (skill) {
    const tag = document.createElement(
      typeof skill === "string" ? "span" : "button"
    );

    tag.textContent =
      typeof skill === "string" ? skill : skill.label;

    if (typeof skill !== "string") {
      tag.type = "button";

      tag.addEventListener("click", function () {
        const headings = detail.querySelectorAll("h2");

        headings.forEach(function (heading) {
          heading.classList.remove("is-highlighted");
        });

        const target = headings[skill.section];

        if (target) {
          target.classList.add("is-highlighted");
          target.scrollIntoView({ block: "center" });
        }
      });
    }

    container.append(tag);
  });
}
document.querySelectorAll(".equipment-branches button")
  .forEach(function (button) {
    button.addEventListener("click", function () {
      const headings = detail.querySelectorAll("h2");

      headings.forEach(function (heading) {
        heading.classList.remove("is-highlighted");
      });

      const target = headings[Number(button.dataset.section)];

      if (target) {
        target.classList.add("is-highlighted");
        target.scrollIntoView({ block: "center" });
      }
    });
  });
// 四站共用同一條路線；站點與動畫都由實際卡片位置計算。
const journeyMap = document.querySelector(".journey-map");
const routeSvg = document.querySelector(".map-routes");
const routePath = document.querySelector("#journey-route");
const journeyMarker = document.querySelector("#journey-marker");
const journeyStations = [
  universityButton, tradeButton, equipmentButton, studyButton
];
const stationDistances = new Map();
const measuringPath = document.createElementNS(
  "http://www.w3.org/2000/svg", "path"
);
let markerDistance = 0;
let markerAnimation = 0;
let markerStation = universityButton;
let arrivalPending = false;

function getStationPoint(button) {
  const mobile = window.matchMedia("(max-width: 600px)").matches;
  const rightColumn = button.matches(".node-trade, .node-study");
  const x = mobile
    ? button.offsetLeft - 8
    : rightColumn
      ? button.offsetLeft - 14
      : button.offsetLeft + button.offsetWidth + 14;

  return { x, y: button.offsetTop + button.offsetHeight / 2 };
}

function drawJourneyRoute() {
  const points = journeyStations.map(getStationPoint);
  routeSvg.setAttribute(
    "viewBox",
    `0 0 ${journeyMap.clientWidth} ${journeyMap.clientHeight}`
  );

  stationDistances.clear();
  stationDistances.set(journeyStations[0], 0);
  let route = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length; i++) {
    const previous = points[i - 1];
    const current = points[i];
    const rise = current.y - previous.y;

    // 縮短上下轉彎：中段舒展、斜向前進，避免飽滿的半圓感。
    // 控制點留在兩站之間；手機同一欄時自然成為直線。
    const bend = Math.sign(rise) * Math.min(Math.abs(rise) * 0.22, 32);
    route += ` C ${previous.x} ${previous.y + bend},`
      + ` ${current.x} ${current.y - bend}, ${current.x} ${current.y}`;

    // 直接量到每一站的路徑長度，取代原本 600 次抽樣找近似位置。
    measuringPath.setAttribute("d", route);
    stationDistances.set(journeyStations[i], measuringPath.getTotalLength());
  }

  routePath.setAttribute("d", route);
}

function placeMarker(distance) {
  const point = routePath.getPointAtLength(distance);
  journeyMarker.setAttribute("cx", point.x);
  journeyMarker.setAttribute("cy", point.y);
  journeyMarker.setAttribute("visibility", "visible");
  markerDistance = distance;
}

function getStationDistance(button) {
  return stationDistances.get(button) ?? 0;
}

function finishArrival() {
  markerAnimation = 0;
  markerDistance = getStationDistance(markerStation);
  // 最後明確對齊圓心，避免 SVG 長度計算的微小誤差。
  const point = getStationPoint(markerStation);
  journeyMarker.setAttribute("cx", point.x);
  journeyMarker.setAttribute("cy", point.y);
  journeyMarker.setAttribute("visibility", "visible");
  if (arrivalPending) {
    markArrival(markerStation);
    arrivalPending = false;
  }
}

function moveMarker(button) {
  cancelAnimationFrame(markerAnimation);
  markerStation = button;
  arrivalPending = true;
  const start = markerDistance;
  const target = getStationDistance(button);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches
      || Math.abs(target - start) < 0.1) {
    finishArrival();
    return;
  }

  const startedAt = performance.now();
  function animate(now) {
    const progress = Math.min((now - startedAt) / 700, 1);
    const eased = progress * progress * (3 - 2 * progress);
    placeMarker(start + (target - start) * eased);
    if (progress < 1) {
      markerAnimation = requestAnimationFrame(animate);
    } else {
      finishArrival();
    }
  }
  markerAnimation = requestAnimationFrame(animate);
}

journeyStations.forEach(function (button) {
  button.addEventListener("click", function () {
    moveMarker(button);
  });
});

// 單一 observer 同步重畫路線與標記，避免兩個 observer 重複計算。
function alignMarker() {
  cancelAnimationFrame(markerAnimation);
  drawJourneyRoute();
  finishArrival();
}

const mapResizeObserver = new ResizeObserver(alignMarker);
mapResizeObserver.observe(journeyMap);
journeyStations.forEach(function (button) {
  mapResizeObserver.observe(button);
});
alignMarker();

function markArrival(button) {
  button.classList.add("is-visited");
  const visited = document.querySelectorAll(".map-node.is-visited").length;
  document.querySelector("#journey-progress").textContent =
    `Explored ${visited} of ${journeyStations.length} stops`;
}
