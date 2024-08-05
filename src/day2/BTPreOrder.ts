function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path
  }

  path.push(curr.value)

  // recurse to the left
  walk(curr.left, path)
  // recurse to the right
  walk(curr.right, path)

  return path

}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, [])
}
