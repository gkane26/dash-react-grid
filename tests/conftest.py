import pytest
from selenium import webdriver


@pytest.fixture(scope="session")
def chrome_options():
    """Configure Chrome options for testing"""
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    return options


def pytest_setup_options():
    """Configure Dash testing options with explicit chromedriver path"""
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    return options


def pytest_configure(config):
    """Configure chromedriver service with explicit path"""
    # Set the chromedriver path for Selenium
    import os
    os.environ['PATH'] = '/opt/homebrew/bin:' + os.environ.get('PATH', '')
