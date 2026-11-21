import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"
import { h } from "preact"

const config = await loadQuartzConfig()
export default config

const EditPageButton = (props: any) => {
  const filePath = props.fileData.filePath ?? ""
  return h(
    "a",
    {
      href: `https://github.com{filePath}`,
      target: "_blank",
      rel: "noopener noreferrer",
      class: "edit-page-btn",
    },
    "Edit Page",
  )
}

export const layout = await loadQuartzLayout({
  byPageType: {
    content: {
      beforeBody: [
        ExternalPlugin.ArticleTitle(),
        ExternalPlugin.TagList(),
        EditPageButton,
      ],
    },
  },
})
