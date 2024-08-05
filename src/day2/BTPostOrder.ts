function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path
  }

  // recurse to the left
  walk(curr.left, path)
  path.push(curr.value)
  // recurse to the right
  walk(curr.right, path)

  return path

}

export default function post_order_search(head: BinaryNode<number>): number[] {
  return walk(head, [])
}
