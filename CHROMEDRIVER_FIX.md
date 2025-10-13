# Chromedriver Troubleshooting

## Issue 1: "Service chromedriver unexpectedly exited. Status code was: -9"

This happens on macOS due to security restrictions. Here are solutions:

## Issue 2: "cannot find Chrome binary"

This means Chrome browser isn't installed or not in the default location.

## Solution 1: Remove Quarantine (Recommended)

```bash
# Find where chromedriver is installed
which chromedriver

# Remove quarantine attribute (replace path if different)
xattr -d com.apple.quarantine $(which chromedriver)

# Or for Homebrew installation:
xattr -d com.apple.quarantine /opt/homebrew/bin/chromedriver
```

## Solution 2: Allow in System Settings

1. Try running chromedriver manually:
   ```bash
   chromedriver
   ```
2. You'll get a security popup
3. Go to: **System Settings** → **Privacy & Security**
4. Click **"Allow Anyway"** next to chromedriver message
5. Run chromedriver again and click **"Open"**

## Solution 3: Use webdriver-manager (Alternative)

Instead of manual chromedriver, use webdriver-manager which handles this automatically:

```bash
# Add webdriver-manager
cd packages/dash-react-grid
uv add --dev webdriver-manager
```

Then create `conftest.py` in tests directory:

```python
import pytest
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service

@pytest.fixture(scope="session")
def chrome_options():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    return options
```

## Solution 4: Use Different Browser

If Chrome issues persist, try Firefox:

```bash
brew install geckodriver
```

Run tests with:
```bash
uv run pytest tests/test_callbacks.py --webdriver=firefox -v
```

## Solution 5: Install Chrome Browser

If you get "cannot find Chrome binary", you need Chrome:

```bash
# Check if Chrome is installed
ls -la "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# If not found, install Chrome
# Download from: https://www.google.com/chrome/
# Or use Homebrew:
brew install --cask google-chrome
```

## Solution 6: Tell Selenium Where Chrome Is (if non-standard location)

Create `tests/conftest.py`:

```python
import pytest
from selenium import webdriver

@pytest.fixture(scope="session")
def chrome_options():
    options = webdriver.ChromeOptions()
    # Specify Chrome location if needed
    options.binary_location = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    options.add_argument("--headless")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    return options
```

## Verify It Works

After applying fixes, test it:

```bash
# Check Chrome is installed
ls -la "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# Check chromedriver works
/opt/homebrew/bin/chromedriver --version
```

Then run tests:
```bash
cd packages/dash-react-grid
uv run pytest tests/test_callbacks.py::test_empty_layout_with_children -v
```
