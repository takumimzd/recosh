```mermaid
erDiagram

recipe ||--o{ process : owns
process ||--o{ process_image : owns

recipe {
  column type
  id number
  title string
  description string
  ingredient string
  image_src string
  hour string
}

process {
  column type
  id number
  recipe_id number
  description string
  order number
}

<!-- process_image {
  column type
  id number
  process_id number
  src string
} -->

<!-- ingredient {
  number id
  string title
  string text
  number points
  number voteStatus
} -->

```