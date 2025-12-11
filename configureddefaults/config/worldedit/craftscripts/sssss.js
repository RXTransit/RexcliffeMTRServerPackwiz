// make all leaves in selection persistent

for (block in selection.blocks()) {
    type = block.getType()
    if (type == 'oak_leaves' || type == 'birch_leaves' || type == 'spruce_leaves' ||
        type == 'jungle_leaves' || type == 'acacia_leaves' || type == 'dark_oak_leaves') {
        block.setType(type)
        block.setData({persistent: 1})
        }
}
