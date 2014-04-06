#!/usr/bin/python

import sys
import logging

logging.basicConfig(stream=sys.stderr)

sys.path.insert(0,"/home/sshi/localchat/stuyhacksNY/server/")

from localchat import app as application
