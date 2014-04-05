#!/usr/bin/python

import sys
import logging

logging.basicConfig(stream=sys.stderr)

sys.path.insert(0,"/home/sshi/localchat/server/")

from sonido import app as application
