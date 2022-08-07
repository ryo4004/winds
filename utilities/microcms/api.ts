type ISO8601 = string

export type MicroCMSApi<T> = {
  createdAt: ISO8601
  updatedAt: ISO8601
  publishedAt: ISO8601
  revisedAt: ISO8601
} & T
