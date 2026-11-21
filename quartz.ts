import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

const config = await loadQuartzConfig()
export default config

const EditPageButton = (props: any) => {
  const filePath = props.fileData.filePath ?? ""
  return (
    <a
      href={`https://github.com{filePath}`}
      target="_blank"
      rel="noopener noreferrer"
      class="edit-page-btn"
    >
      Edit
    </a>
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
