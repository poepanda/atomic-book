import { TagTypes } from "@atoms/Tag/Tag"

export const COMMON_ARTICLE = {
  title: 'Primary description maximum 3 lines',
  description: 'Secondary description maximum 3 lines',
  tags: [
    {
      type: TagTypes.Common,
      label: 'Tag 1'
    },
    {
      type: TagTypes.Common,
      label: 'Tag 2'
    },
  ],
  topTag: {
    label: 'Top Tag',
    type: TagTypes.CalloutTopleft
  }
}