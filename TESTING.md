# Dash React Grid - Test Suite Documentation

## Test Files

### `test_callbacks.py` - Comprehensive Callback and Interaction Tests

This file contains extensive tests for the dash-react-grid component's functionality.

## Test Coverage

### 1. **test_layout_callback_updates_store**
Tests that dragging grid items properly triggers Dash callbacks and updates `dcc.Store` components.
- Verifies layout changes are reflected in store data
- Tests callback chain: drag → layout update → store update

### 2. **test_resize_updates_layout**
Tests resizing functionality and callback triggering.
- Verifies resize handles work correctly
- Tests that resize events update the layout property
- Confirms callbacks receive updated width/height values

### 3. **test_multiple_items_interaction**
Tests interactions with multiple grid items simultaneously.
- Verifies all items maintain their identity
- Tests drag operations don't affect other items incorrectly
- Confirms layout updates include all items

### 4. **test_static_items_cannot_be_moved**
Tests that items marked as `static: True` cannot be dragged or moved.
- Verifies static class is applied
- Tests that drag attempts don't change position
- Confirms layout remains unchanged

### 5. **test_empty_layout_with_children**
Tests edge case where layout is empty but children are provided.
- Verifies children still render
- Tests graceful handling of missing layout data

### 6. **test_layout_with_constraints**
Tests size constraints (minW, maxW, minH, maxH).
- Verifies items respect minimum size constraints
- Tests maximum size constraints are enforced
- Confirms resize is limited to constraint boundaries

### 7. **test_prevent_collision_mode**
Tests `preventCollision=True` mode.
- Verifies items cannot overlap
- Tests collision detection during drag
- Confirms items maintain proper spacing

### 8. **test_non_draggable_grid**
Tests `isDraggable=False` property.
- Verifies drag operations are disabled
- Tests that layout doesn't change on drag attempts
- Confirms grid is view-only when dragging disabled

### 9. **test_non_resizable_grid**
Tests `isResizable=False` property.
- Verifies resize handles are not present
- Tests that resize operations are disabled
- Confirms items cannot be resized

## Running the Tests

### Prerequisites
You need chromedriver installed to run these Selenium-based tests:

```bash
# macOS with Homebrew
brew install chromedriver

# Or download from:
# https://chromedriver.chromium.org/downloads
```

### Run All Tests
```bash
cd packages/dash-react-grid
uv run pytest tests/test_callbacks.py -v
```

### Run Specific Test
```bash
uv run pytest tests/test_callbacks.py::test_layout_callback_updates_store -v
```

### Run with Visible Browser (non-headless)
```bash
uv run pytest tests/test_callbacks.py --headless=false -v
```

## Test Architecture

All tests follow this pattern:

1. **Setup**: Create a Dash app with ReactGridLayout
2. **Start Server**: Use dash_duo fixture to start test server
3. **Interact**: Use Selenium ActionChains to simulate user interactions
4. **Verify**: Check that callbacks fired and state updated correctly
5. **Cleanup**: Automatic via pytest fixtures

## Future Test Ideas

- [ ] Test responsive layouts with breakpoints
- [ ] Test drag handles (draggableHandle prop)
- [ ] Test drag cancel (draggableCancel prop)
- [ ] Test maxRows constraint
- [ ] Test compactType variants (vertical, horizontal, null)
- [ ] Test allowOverlap mode
- [ ] Test CSS transforms disabled (useCSSTransforms=False)
- [ ] Test containerPadding vs margin
- [ ] Performance tests with many items (50+)
- [ ] Test keyboard interactions
- [ ] Test touch events (mobile)
