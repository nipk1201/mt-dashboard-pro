FROM --platform=linux/amd64 universalrobots/urcap_polyscopex_ros2:5.0.2-jazzy-dev as ros-dev

# install package dependencies
COPY requirements.txt /opt/ros2_ws/requirements.txt
RUN pip3 install --disable-pip-version-check --break-system-packages -r /opt/ros2_ws/requirements.txt

# copy source and build release
FROM ros-dev AS ros-builder
COPY src /opt/ros2_ws/src
RUN rm -rf /opt/ros2_ws/install
RUN colcon \
    build \
    --merge-install \
    --mixin build-testing-on release \
    --cmake-args --no-warn-unused-cli

# Copy the built package to runtime image
FROM --platform=linux/amd64 universalrobots/urcap_polyscopex_ros2:5.0.2-jazzy-runtime as final
ARG PACKAGE_NAME="mt_dashboard_pro"

COPY --from=ros-builder /opt/ros2_ws/install/lib/python3.11/site-packages /opt/ros/jazzy/lib/python3.11/site-packages
COPY --from=ros-builder /opt/ros2_ws/install/lib/$PACKAGE_NAME /opt/ros/jazzy/lib/$PACKAGE_NAME

WORKDIR /opt/ros/jazzy/lib/$PACKAGE_NAME

CMD ["python3", "main"]
