// Course data. The generator maintains this array: it adds and updates
// entries in place, so everything below it is safe to edit.
const courses = [
        {
            "title": "Assembly 101",
            "image": "Images/Assembly_101.png",
            "link": "https://LexCode30.github.io/Assembly_101/",
            "category": "systems"
        },
        {
            "title": "C sharp 101 for Hackers",
            "image": "Images/C_sharp_101_for_Hackers.png",
            "link": "https://LexCode30.github.io/C_sharp_101_for_Hackers/",
            "category": "programming"
        },
        {
            "title": "Detection Engineering for Beginners",
            "image": "Images/Detection_Engineering_for_Beginners.png",
            "link": "https://LexCode30.github.io/Detection_Engineering_for_Beginners/",
            "category": "cybersecurity"
        },
        {
            "title": "Linux 101",
            "image": "Images/Linux_101.png",
            "link": "https://LexCode30.github.io/Linux_101/",
            "category": "systems"
        },
        {
            "title": "Linux Privilege Escalation for Beginners",
            "image": "Images/Linux_Privilege_Escalation_for_Beginners.png",
            "link": "https://LexCode30.github.io/Linux_Privilege_Escalation_for_Beginners/",
            "category": "systems"
        },
        {
            "title": "Mobile Application Penetration Testing",
            "image": "Images/Mobile_Application_Penetration_Testing.png",
            "link": "https://LexCode30.github.io/Mobile_Application_Penetration_Testing/",
            "category": "cybersecurity"
        },
        {
            "title": "Movement Pivoting and Persistence",
            "image": "Images/Movement_Pivoting_and_Persistence.png",
            "link": "https://LexCode30.github.io/Movement_Pivoting_and_Persistence/",
            "category": "cybersecurity"
        },
        {
            "title": "Open-Source Intelligence (OSINT) Fundamentals",
            "image": "Images/Open-Source_Intelligence_-OSINT-_Fundamentals.png",
            "link": "https://LexCode30.github.io/Open-Source_Intelligence_-OSINT-_Fundamentals/",
            "category": "programming"
        },
        {
            "title": "Practical API Hacking",
            "image": "Images/Practical_API_Hacking.png",
            "link": "https://LexCode30.github.io/Practical_API_Hacking/",
            "category": "cybersecurity"
        },
        {
            "title": "Practical Bug Bounty",
            "image": "Images/Practical_Bug_Bounty.png",
            "link": "https://LexCode30.github.io/Practical_Bug_Bounty/",
            "category": "cybersecurity"
        },
        {
            "title": "Practical Ethical Hacking",
            "image": "Images/Practical_Ethical_Hacking.png",
            "link": "https://LexCode30.github.io/Practical_Ethical_Hacking/",
            "category": "cybersecurity"
        },
        {
            "title": "Practical Malware Analysis and Triage",
            "image": "Images/Practical_Malware_Analysis_and_Triage.png",
            "link": "https://LexCode30.github.io/Practical_Malware_Analysis_and_Triage/",
            "category": "cybersecurity"
        },
        {
            "title": "Practical Phishing Campaigns",
            "image": "Images/Practical_Phishing_Campaigns.png",
            "link": "https://LexCode30.github.io/Practical_Phishing_Campaigns/",
            "category": "cybersecurity"
        },
        {
            "title": "Practical Web Hacking",
            "image": "Images/Practical_Web_Hacking.png",
            "link": "https://LexCode30.github.io/Practical_Web_Hacking/",
            "category": "cybersecurity"
        },
        {
            "title": "Python 101 for Hackers",
            "image": "Images/Python_101_for_Hackers.png",
            "link": "https://LexCode30.github.io/Python_101_for_Hackers/",
            "category": "programming"
        },
        {
            "title": "Python 201 For Hackers",
            "image": "Images/Python_201_For_Hackers.png",
            "link": "https://LexCode30.github.io/Python_201_For_Hackers/",
            "category": "programming"
        },
        {
            "title": "Security Operations (SOC) 101",
            "image": "Images/Security_Operations_-SOC-_101.png",
            "link": "https://LexCode30.github.io/Security_Operations_-SOC-_101/",
            "category": "cybersecurity"
        },
        {
            "title": "Security Operations (SOC) 201",
            "image": "Images/Security_Operations_-SOC-_201.png",
            "link": "https://LexCode30.github.io/Security_Operations_-SOC-_201/",
            "category": "cybersecurity"
        },
        {
            "title": "Windows Privilege Escalation for Beginners",
            "image": "Images/windows_previlege.png",
            "link": "https://LexCode30.github.io/Windows_Privilege_Escalation_for_Beginners/",
            "category": "systems"
        },
        {
            "title": " Elastic Stack Getting Started",
            "image": "https://i.ytimg.com/vi/FImTcHECpC0/mqdefault.jpg",
            "link": "https://LexCode30.github.io/Elastic_Stack_Getting_Started/",
            "category": "programming"
        },
        {
            "title": "Java Essentials",
            "image": "https://m.media-amazon.com/images/I/91AB88mdK8L._AC_UF350,350_QL50_.jpg",
            "link": "https://LexCode30.github.io/Java_Essentials/",
            "category": "programming"
        },
        {
            "title": "Mastering Kubernetes",
            "image": "https://www.uptycs.com/hs-fs/hubfs/mastering-kubernetes-container-security.jpg?width=352&name=mastering-kubernetes-container-security.jpg",
            "link": "https://LexCode30.github.io/Mastering_Kubernetes/",
            "category": "web-development"
        },
        {
            "title": "AWS Certified Cloud Practitioner",
            "image": "https://d2908q01vomqb2.cloudfront.net/9109c85a45b703f87f1413a405549a2cea9ab556/2020/11/10/AWSCloudPractitionerEssentialsBlog_300x150.png",
            "link": "https://LexCode30.github.io/AWS_Certified_Cloud_Practitioner/",
            "category": "cloud"
        },
        {
            "title": "AWS Certified Solutions Architect",
            "image": "https://img-c.udemycdn.com/course/240x135/5914092_588d_2.jpg",
            "link": "https://LexCode30.github.io/AWS_Certified_Solutions_Architect/",
            "category": "cloud"
        },
        {
            "title": "AZ-900 Microsoft Azure Fundamentals",
            "image": "https://img-c.udemycdn.com/course/240x135/3140524_2f2f_8.jpg",
            "link": "https://LexCode30.github.io/AZ-900_Microsoft_Azure_Fundamentals/",
            "category": "cloud"
        },
        {
            "title": "Bash Scripting Learn Shell Scripting",
            "image": "https://images.ctfassets.net/aq13lwl6616q/395iMiqbPBUPQGGEluVUXT/ca0636cf2e4f182c5f5821386bcd02ee/Academy_3_Course_Thumbnail_-_Bash_Programming.png?w=400&fm=webp",
            "link": "https://LexCode30.github.io/Bash_Scripting_Learn_Shell_Scripting/",
            "category": "systems"
        },
        {
            "title": "Complete Cybersecurity Bootcamp",
            "image": "https://www.itcareerfinder.com/images/best-cybersecurity-bootcamps-online-2024.gif",
            "link": "https://LexCode30.github.io/Complete_Cybersecurity_Bootcamp/",
            "category": "cybersecurity"
        },
        {
            "title": "CompTIA Security+ Certification Bootcamp",
            "image": "https://img-c.udemycdn.com/course/240x135/2616890_6925.jpg",
            "link": "https://LexCode30.github.io/CompTIA_Security-_Certification_Bootcamp/",
            "category": "cybersecurity"
        },
        {
            "title": "DevOps Bootcamp Learn Linux & Become a Linux Sysadmin",
            "image": "https://images.ctfassets.net/aq13lwl6616q/Lxp7NOjFmtq9IlqyBKgPt/b868427a9f388c8105f051bf1c6062f3/Linux_sysadmin_DevOps_Series.png?w=400&h=225&q=50&fm=png&bg=transparent",
            "link": "https://LexCode30.github.io/DevOps_Bootcamp_Learn_Linux_-_Become_a_Linux_Sysadmin/",
            "category": "systems"
        },
        {
            "title": "Getting Started with Ansible Automation Made Easy",
            "image": "https://img-c.udemycdn.com/course/240x135/6032754_930e.jpg",
            "link": "https://LexCode30.github.io/Getting_Started_with_Ansible_Automation_Made_Easy/",
            "category": "systems"
        },
        {
            "title": "Master Python Hacking plus then 15 Projects from Beginner to Expert",
            "image": "https://img-c.udemycdn.com/course/240x135/6124711_54b8_2.jpg",
            "link": "https://LexCode30.github.io/Master_Python_Hacking_plus_then_15_Projects_from_Beginner_to_Expert/",
            "category": "programming"
        },
        {
            "title": "Next.js Simplified",
            "image": "https://i.ytimg.com/vi/nHnw3pusFXw/mqdefault.jpg",
            "link": "https://LexCode30.github.io/Next-js_Simplified/",
            "category": "web-development"
        },
        {
            "title": "NGINX Fundamentals High Performance Servers from Scratch",
            "image": "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/9a4da97c3b99.jpg",
            "link": "https://LexCode30.github.io/NGINX_Fundamentals_High_Performance_Servers_from_Scratch/",
            "category": "cybersecurity"
        },
        {
            "title": "SC-900 Microsoft Security, Compliance, Identity Fundamentals",
            "image": "Images/SC-900.webp",
            "link": "https://LexCode30.github.io/SC-900_Microsoft_Security-_Compliance-_Identity_Fundamentals/",
            "category": "cybersecurity"
        },
        {
            "title": "The Complete Certified in Cybersecurity CC course ISC2",
            "image": "https://img-c.udemycdn.com/course/240x135/6169361_cc9d.jpg",
            "link": "https://LexCode30.github.io/The_Complete_Certified_in_Cybersecurity_CC_course_ISC2/",
            "category": "cybersecurity"
        },
        {
            "title": "The Ultimate Docker Course",
            "image": "https://img-c.udemycdn.com/course/240x135/5730026_f14f_6.jpg",
            "link": "https://LexCode30.github.io/The_Ultimate_Docker_Course/",
            "category": "systems"
        },
        {
            "title": "The Ultimate JavaScript Series",
            "image": "https://i.ytimg.com/vi/8w_oH58AvoA/mqdefault.jpg",
            "link": "https://LexCode30.github.io/The_Ultimate_JavaScript_Series/",
            "category": "web-development"
        },
        {
            "title": "Web Security & Bug Bounty Learn Penetration Testing",
            "image": "https://img-c.udemycdn.com/course/240x135/3985968_eafc_4.jpg",
            "link": "https://LexCode30.github.io/Web_Security_-_Bug_Bounty_Learn_Penetration_Testing/",
            "category": "cybersecurity"
        },
        {
            "title": "Windows Server 2022 Administration",
            "image": "Images/Windows Server 2022.png",
            "link": "https://LexCode30.github.io/Windows_Server_2022_Administration/",
            "category": "cloud"
        }
    ];

(function () {
  "use strict";

  var INDEX_URL = "search-index.json";
  var INDEX_CACHE = "cs:lib:index:v1";
  var INDEX_MAX_AGE = 6 * 60 * 60 * 1000;   // refresh in the background after this
  var VIDEO_PAGE = 25;                      // video results shown before "show more"

  /* The courses and this page are all served from the same origin, so the
     progress the course pages store in localStorage can be read here:
       cs:<slug>:v:<videoId>  one key per completed video
       cs:<slug>:last         the last video watched
       cs:<slug>:total        how many videos the course has (cached below)
       cs:theme               dark or light, shared with the course pages */

  var state = { search: "", category: "all", sort: "default", shown: VIDEO_PAGE };
  var el = {};
  var progress = {};
  var index = null;        // the video search index, once loaded
  var indexState = "idle"; // idle | loading | ready | failed

  function slugOf(course) {
    return (course.link || "").replace(/\/+$/, "").split("/").pop();
  }

  function read(key) {
    try { return localStorage.getItem(key); } catch (err) { return null; }
  }

  function write(key, value) {
    try { localStorage.setItem(key, value); } catch (err) { /* ignore */ }
  }

  function countCompleted(slug) {
    var prefix = "cs:" + slug + ":v:";
    var done = 0;
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key && key.indexOf(prefix) === 0 && localStorage.getItem(key) === "1") done++;
      }
    } catch (err) { /* storage unavailable */ }
    return done;
  }

  function lastWatched(slug) {
    try { return JSON.parse(read("cs:" + slug + ":last") || "null"); } catch (err) { return null; }
  }

  function readProgress() {
    courses.forEach(function (course) {
      var slug = slugOf(course);
      var total = parseInt(read("cs:" + slug + ":total"), 10);
      progress[slug] = {
        done: countCompleted(slug),
        total: isNaN(total) ? 0 : total,
        last: lastWatched(slug),
      };
    });
  }

  /* A started course needs its video count to show a ratio. The course site
     publishes course.json, so fetch it once and remember the number. Only
     courses that have been started are fetched, and only once each. */
  function fetchTotals() {
    if (typeof fetch !== "function") return;
    courses.forEach(function (course) {
      var slug = slugOf(course);
      var info = progress[slug];
      if (!info || !info.done || info.total) return;
      fetch(course.link + "course.json", { cache: "force-cache" })
        .then(function (response) { return response.ok ? response.json() : null; })
        .then(function (data) {
          if (!data || !data.chapters) return;
          var total = data.chapters.reduce(function (sum, chapter) {
            return sum + (chapter.videos ? chapter.videos.length : 0);
          }, 0);
          if (!total) return;
          info.total = total;
          write("cs:" + slug + ":total", String(total));
          render();
        })
        .catch(function () { /* offline, or the course was removed */ });
    });
  }

  /* ---------- the video index ----------

     Every course publishes course.json, and build-search-index.py folds them
     into one file: courses, chapters and videos with the drive id each video
     page is anchored on. It is only fetched when someone shows an interest in
     searching, and then cached, so the library costs nothing extra to browse. */

  function cachedIndex() {
    var raw = read(INDEX_CACHE);
    if (!raw) return null;
    try {
      var held = JSON.parse(raw);
      if (!held || !held.data || !held.data.videos) return null;
      return held;
    } catch (err) {
      return null;
    }
  }

  function storeIndex(data) {
    write(INDEX_CACHE, JSON.stringify({ at: Date.now(), data: data }));
  }

  function fetchIndex() {
    return fetch(INDEX_URL, { cache: "no-cache" })
      .then(function (response) {
        if (!response.ok) throw new Error("HTTP " + response.status);
        return response.json();
      })
      .then(function (data) {
        if (!data || !Array.isArray(data.videos)) throw new Error("bad index");
        index = data;
        storeIndex(data);
        return data;
      });
  }

  function ensureIndex() {
    if (indexState === "ready" || indexState === "loading") return;

    var held = cachedIndex();
    if (held) {
      index = held.data;
      indexState = "ready";
      render();
      // Quietly pick up courses published since this was cached.
      if (Date.now() - held.at > INDEX_MAX_AGE) {
        fetchIndex().then(render).catch(function () { /* keep the cached one */ });
      }
      return;
    }

    indexState = "loading";
    render();
    fetchIndex()
      .then(function () { indexState = "ready"; render(); })
      .catch(function () { indexState = "failed"; render(); });
  }

  /* ---------- searching videos ---------- */

  function terms() {
    return state.search.trim().toLowerCase().split(/\s+/).filter(Boolean);
  }

  function matchingVideos() {
    if (!index || !index.videos) return [];
    var words = terms();
    if (!words.length || state.search.trim().length < 2) return [];

    var results = [];
    for (var i = 0; i < index.videos.length; i++) {
      var video = index.videos[i];
      var chapter = index.chapters[video[0]];
      var course = index.courses[chapter[0]];
      if (state.category !== "all" && course[2] !== state.category) continue;

      var title = video[1].toLowerCase();
      var where = (chapter[2] + " " + course[0]).toLowerCase();
      var score = 0;
      var missed = false;
      for (var w = 0; w < words.length; w++) {
        if (title.indexOf(words[w]) !== -1) score += 3;
        else if (where.indexOf(words[w]) !== -1) score += 1;
        else { missed = true; break; }
      }
      if (missed) continue;
      // A title that opens with the term is almost always the better hit.
      if (title.indexOf(words[0]) === 0) score += 2;
      results.push({ video: video, chapter: chapter, course: course, score: score });
    }
    results.sort(function (a, b) {
      return b.score - a.score || a.video[1].localeCompare(b.video[1]);
    });
    return results;
  }

  function highlight(text, words) {
    var fragment = document.createDocumentFragment();
    var lower = text.toLowerCase();
    var cursor = 0;
    while (cursor < text.length) {
      var at = -1, length = 0;
      for (var w = 0; w < words.length; w++) {
        var found = lower.indexOf(words[w], cursor);
        if (found !== -1 && (at === -1 || found < at)) { at = found; length = words[w].length; }
      }
      if (at === -1) break;
      if (at > cursor) fragment.appendChild(document.createTextNode(text.slice(cursor, at)));
      var mark = document.createElement("mark");
      mark.textContent = text.slice(at, at + length);
      fragment.appendChild(mark);
      cursor = at + length;
    }
    if (cursor < text.length) fragment.appendChild(document.createTextNode(text.slice(cursor)));
    return fragment;
  }

  function buildVideoRow(hit, words) {
    var course = hit.course, chapter = hit.chapter, video = hit.video;
    var row = el_("li", "video-result");
    var link = el_("a");
    link.href = "https://lexcode30.github.io/" + course[1] + "/s" + chapter[1] + ".html#v-" + video[2];

    var play = el_("span", "play");
    var icon = el_("i", "fas fa-play");
    icon.setAttribute("aria-hidden", "true");
    play.appendChild(icon);

    var lines = el_("div", "lines");
    var name = el_("span", "name");
    name.appendChild(highlight(video[1], words));
    var where = el_("span", "where");
    where.appendChild(document.createTextNode(course[0]));
    var sep = el_("span", "sep", "\u203a");
    where.appendChild(sep);
    where.appendChild(document.createTextNode(chapter[2]));
    lines.appendChild(name);
    lines.appendChild(where);

    var go = el_("span", "go");
    var arrow = el_("i", "fas fa-arrow-right");
    arrow.setAttribute("aria-hidden", "true");
    go.appendChild(arrow);

    link.appendChild(play);
    link.appendChild(lines);
    link.appendChild(go);
    row.appendChild(link);
    return row;
  }

  function renderVideos() {
    var searching = state.search.trim().length >= 2;
    el.indexState.hidden = true;

    if (!searching) {
      el.videosSection.hidden = true;
      el.videoResults.textContent = "";
      return 0;
    }

    if (indexState === "loading") {
      el.videosSection.hidden = true;
      el.indexState.hidden = false;
      el.indexState.textContent = "";
      el.indexState.appendChild(el_("span", "spinner"));
      el.indexState.appendChild(el_("span", null, "Searching every video\u2026"));
      return 0;
    }
    if (indexState === "failed") {
      el.videosSection.hidden = true;
      el.indexState.hidden = false;
      el.indexState.textContent = "Video search is unavailable right now. Course titles are still searchable.";
      return 0;
    }
    if (indexState !== "ready") { el.videosSection.hidden = true; return 0; }

    var hits = matchingVideos();
    if (!hits.length) {
      el.videosSection.hidden = true;
      el.videoResults.textContent = "";
      el.videosHeading.textContent = "Videos";
      el.showMore.hidden = true;
      return 0;
    }

    var words = terms();
    var visibleHits = hits.slice(0, state.shown);
    el.videoResults.textContent = "";
    var fragment = document.createDocumentFragment();
    visibleHits.forEach(function (hit) { fragment.appendChild(buildVideoRow(hit, words)); });
    el.videoResults.appendChild(fragment);

    el.videosHeading.textContent = hits.length === 1 ? "1 video" : hits.length + " videos";
    el.videosSection.hidden = false;
    el.showMore.hidden = hits.length <= state.shown;
    el.showMore.textContent = "Show " + Math.min(VIDEO_PAGE, hits.length - state.shown) + " more";
    return hits.length;
  }

  /* ---------- building cards ---------- */

  function el_(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;   // never innerHTML
    return node;
  }

  function buildCard(course) {
    var slug = slugOf(course);
    var info = progress[slug] || { done: 0, total: 0, last: null };
    var complete = info.total > 0 && info.done >= info.total;

    var card = el_("a", "course-card");
    card.setAttribute("role", "listitem");
    card.href = info.last && info.last.href ? course.link + info.last.href : course.link;
    card.dataset.category = course.category || "other";
    card.dataset.title = (course.title || "").toLowerCase();
    card.dataset.done = String(info.done);
    card.dataset.ratio = info.total ? String(info.done / info.total) : "0";

    var media = el_("div", "course-image");
    if (course.image) media.style.backgroundImage = "url(" + JSON.stringify(course.image) + ")";
    if (complete) {
      var badge = el_("span", "done-tag");
      badge.appendChild(el_("span", null, "✓"));
      badge.appendChild(el_("span", null, "Completed"));
      media.appendChild(badge);
    }

    var info_ = el_("div", "course-info");
    info_.appendChild(el_("h2", "course-title", course.title || "Untitled course"));

    if (info.done > 0) {
      var wrap = el_("div", "course-progress");
      var bar = el_("span", "mini-bar");
      var fill = el_("span", "mini-fill");
      fill.style.width = info.total ? Math.round((info.done / info.total) * 100) + "%" : "100%";
      bar.appendChild(fill);
      wrap.appendChild(bar);
      wrap.appendChild(el_("span", "mini-text",
        info.total ? info.done + " of " + info.total + " videos" : info.done + " videos watched"));
      info_.appendChild(wrap);
    }

    var link = el_("span", "course-link");
    link.appendChild(el_("span", null,
      complete ? "Watch again" : info.done > 0 ? "Continue" : "Start course"));
    var arrow = el_("i", "fas fa-arrow-right");
    arrow.setAttribute("aria-hidden", "true");
    link.appendChild(arrow);
    info_.appendChild(link);

    card.appendChild(media);
    card.appendChild(info_);
    return card;
  }

  /* ---------- rendering ---------- */

  function visible() {
    var term = state.search.trim().toLowerCase();
    var list = courses.filter(function (course) {
      if (state.category !== "all" && course.category !== state.category) return false;
      if (!term) return true;
      return (course.title || "").toLowerCase().indexOf(term) !== -1 ||
             (course.category || "").toLowerCase().indexOf(term) !== -1;
    });

    if (state.sort === "title") {
      list.sort(function (a, b) { return (a.title || "").localeCompare(b.title || ""); });
    } else if (state.sort === "progress") {
      list.sort(function (a, b) {
        var pa = progress[slugOf(a)] || {}, pb = progress[slugOf(b)] || {};
        var ra = pa.total ? pa.done / pa.total : (pa.done ? 0.5 : 0);
        var rb = pb.total ? pb.done / pb.total : (pb.done ? 0.5 : 0);
        return rb - ra;
      });
    }
    return list;
  }

  function render() {
    var list = visible();
    el.grid.textContent = "";
    var fragment = document.createDocumentFragment();
    list.forEach(function (course) { fragment.appendChild(buildCard(course)); });
    el.grid.appendChild(fragment);

    var searching = state.search.trim().length > 0;
    el.grid.hidden = list.length === 0;
    el.coursesHeading.hidden = !searching || list.length === 0;

    var videoCount = renderVideos();

    // Only truly empty when neither a course nor a video matched, and the
    // index is not still being fetched.
    el.empty.hidden = list.length > 0 || videoCount > 0 || indexState === "loading";

    var filtering = searching || state.category !== "all";
    el.reset.hidden = !filtering;
    if (!filtering) {
      el.results.textContent = "";
    } else {
      var parts = [list.length + (list.length === 1 ? " course" : " courses")];
      if (videoCount) parts.push(videoCount + (videoCount === 1 ? " video" : " videos"));
      el.results.textContent = parts.join(" \u00b7 ") +
        (state.search ? ' matching "' + state.search + '"' : "") +
        (state.category !== "all" ? " in " + state.category.replace(/-/g, " ") : "");
    }

    updateSummary();
  }

  function updateSummary() {
    var started = 0, done = 0;
    courses.forEach(function (course) {
      var info = progress[slugOf(course)];
      if (!info || !info.done) return;
      started++;
      if (info.total && info.done >= info.total) done++;
    });
    el.statCourses.textContent = String(courses.length);
    el.statStarted.textContent = String(started - done);
    el.statDone.textContent = String(done);
    el.brandSub.textContent = courses.length + (courses.length === 1 ? " course" : " courses");
    el.librarySub.textContent = started
      ? "You have started " + started + " of " + courses.length +
        " courses. Progress is remembered in this browser."
      : "Pick a course and start watching. Your progress is remembered in this browser.";
  }

  function updateCounts() {
    el.filters.querySelectorAll(".chip").forEach(function (chip) {
      var category = chip.dataset.category;
      var n = category === "all"
        ? courses.length
        : courses.filter(function (c) { return c.category === category; }).length;
      var count = chip.querySelector(".count");
      if (!count) {
        count = el_("span", "count");
        chip.appendChild(count);
      }
      count.textContent = String(n);
      // A category nobody publishes to is only clutter.
      chip.hidden = n === 0 && category !== "all";
    });
  }

  /* ---------- theme, shared with the course pages ---------- */

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var icon = document.querySelector("#themeToggle i");
    if (icon) icon.className = theme === "light" ? "fas fa-sun" : "fas fa-moon";
  }

  function initTheme() {
    applyTheme(read("cs:theme") === "light" ? "light" : "dark");
    el.theme.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
      write("cs:theme", next);
    });
  }

  /* ---------- wiring ---------- */

  function debounce(fn, wait) {
    var timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(fn, wait);
    };
  }

  /* A search is worth linking to, so it lives in the URL. */
  function rememberQuery() {
    if (!window.history || !history.replaceState) return;
    var url = location.pathname + (state.search ? "?q=" + encodeURIComponent(state.search) : "");
    history.replaceState(null, "", url + location.hash);
  }

  function queryFromUrl() {
    var match = /[?&]q=([^&]*)/.exec(location.search);
    try { return match ? decodeURIComponent(match[1].replace(/\+/g, " ")) : ""; }
    catch (err) { return ""; }
  }

  function init() {
    el.grid = document.getElementById("courses-container");
    el.search = document.getElementById("search");
    el.clear = document.getElementById("clear-search");
    el.filters = document.getElementById("filters");
    el.empty = document.getElementById("no-results");
    el.results = document.getElementById("results-info");
    el.reset = document.getElementById("reset-search");
    el.sort = document.getElementById("sort");
    el.theme = document.getElementById("themeToggle");
    el.statCourses = document.getElementById("statCourses");
    el.statStarted = document.getElementById("statStarted");
    el.statDone = document.getElementById("statDone");
    el.brandSub = document.getElementById("brandSub");
    el.librarySub = document.getElementById("librarySub");
    el.coursesHeading = document.getElementById("courses-heading");
    el.videosSection = document.getElementById("videos-section");
    el.videosHeading = document.getElementById("videos-heading");
    el.videoResults = document.getElementById("video-results");
    el.showMore = document.getElementById("show-more");
    el.indexState = document.getElementById("index-state");

    initTheme();
    readProgress();
    updateCounts();

    var initial = queryFromUrl();
    if (initial) {
      state.search = initial;
      el.search.value = initial;
      el.clear.hidden = false;
      if (initial.trim().length >= 2) ensureIndex();
    }

    render();
    fetchTotals();

    var onSearch = debounce(function () {
      state.search = el.search.value;
      state.shown = VIDEO_PAGE;
      el.clear.hidden = !state.search;
      if (state.search.trim().length >= 2) ensureIndex();
      render();
      rememberQuery();
    }, 200);
    el.search.addEventListener("input", onSearch);
    // Fetch the index as soon as someone looks like they will search, so the
    // first query does not wait for it.
    el.search.addEventListener("focus", ensureIndex, { once: true });
    el.search.addEventListener("keydown", function (event) {
      if (event.key === "Escape") { el.search.value = ""; state.search = ""; el.clear.hidden = true; render(); el.search.blur(); }
    });
    el.clear.addEventListener("click", function () {
      el.search.value = ""; state.search = ""; el.clear.hidden = true; render(); el.search.focus();
    });

    el.filters.addEventListener("click", function (event) {
      var chip = event.target.closest(".chip");
      if (!chip) return;
      state.category = chip.dataset.category;
      el.filters.querySelectorAll(".chip").forEach(function (other) {
        other.setAttribute("aria-pressed", other === chip ? "true" : "false");
      });
      render();
    });

    el.sort.addEventListener("change", function () { state.sort = el.sort.value; render(); });

    el.showMore.addEventListener("click", function () {
      state.shown += VIDEO_PAGE;
      render();
    });

    el.reset.addEventListener("click", function () {
      state.search = ""; state.category = "all"; state.sort = "default"; state.shown = VIDEO_PAGE;
      el.search.value = ""; el.clear.hidden = true; el.sort.value = "default";
      el.filters.querySelectorAll(".chip").forEach(function (chip) {
        chip.setAttribute("aria-pressed", chip.dataset.category === "all" ? "true" : "false");
      });
      render();
      rememberQuery();
    });

    // "/" focuses search, the same shortcut the course pages use.
    document.addEventListener("keydown", function (event) {
      var tag = (document.activeElement && document.activeElement.tagName) || "";
      if (event.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") {
        event.preventDefault();
        el.search.focus();
      }
    });

    // Progress made in another tab shows up here without a reload.
    window.addEventListener("storage", function () { readProgress(); render(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
