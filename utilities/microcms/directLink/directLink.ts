export type DirectLink = {
  active: boolean
  label: string
  url: string
}

export type DirectLinkApi = {
  fieldId: 'directLink'
  active: boolean
  label: string
  url: string
}

export const convertDirectLink = (directLink: DirectLinkApi): DirectLink => {
  const { fieldId, ...rest } = directLink
  return { ...rest }
}
