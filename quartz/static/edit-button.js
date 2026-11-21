document.addEventListener("nav", () => {
  const title = document.querySelector(".article-title")
  if (!title || document.querySelector(".edit-page-btn")) return

  let slug = window.location.pathname.replace(/^\/tcfw\/?/, "").replace(/\/$/, "")
  if (!slug) slug = "index"

  const btn = document.createElement("a")
  btn.href = `https://github.com{slug}.md`
  btn.target = "_blank"
  btn.rel = "noopener noreferrer"
  btn.className = "edit-page-btn"
  btn.textContent = "Edit page"

  title.insertAdjacentElement("afterend", btn)
})
