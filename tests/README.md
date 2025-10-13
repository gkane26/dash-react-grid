# Dash React Grid - Quick Test Reference

## Running Tests

### Install chromedriver first
```bash
brew install chromedriver  # macOS
```

### Run all tests
```bash
uv run pytest tests/test_callbacks.py -v
```

### Run specific test
```bash
uv run pytest tests/test_callbacks.py::test_resize_updates_layout -v
```

### Run with visible browser
```bash
uv run pytest tests/test_callbacks.py --headless=false -v
```

## Test List

| Test Name | What It Tests |
|-----------|---------------|
| `test_layout_callback_updates_store` | Drag updates dcc.Store |
| `test_resize_updates_layout` | Resize triggers callbacks |
| `test_multiple_items_interaction` | Multiple items work correctly |
| `test_static_items_cannot_be_moved` | Static items stay put |
| `test_empty_layout_with_children` | Empty layout edge case |
| `test_layout_with_constraints` | Min/max size constraints |
| `test_prevent_collision_mode` | Collision prevention |
| `test_non_draggable_grid` | isDraggable=False |
| `test_non_resizable_grid` | isResizable=False |

## Common Issues

### "chromedriver not found"
```bash
brew install chromedriver
```

### Tests run but fail
- Check if port 8050 is in use
- Try running with `--headless=false` to see browser
- Check Chrome and chromedriver versions match

### Slow tests
- Tests use Selenium and are inherently slower
- Each test starts a browser and app
- Normal for each test to take 2-5 seconds
