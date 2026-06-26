from setuptools import setup

setup(
    name='mt_dashboard_pro',
    version='0.0.0',
    packages=['mt_dashboard_pro'],
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/mt_dashboard_pro']),
        ('share/' + 'mt_dashboard_pro', ['package.xml']),
    ],
    install_requires=['setuptools'],
    zip_safe=True,
    description='mt-dashboard-pro description',
    entry_points={
        'console_scripts': [
            'main = mt_dashboard_pro.main:main'
        ],
    },
)