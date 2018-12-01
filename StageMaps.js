/**********************************************************
codes
00 = nothing
01 = 4 way wall connector
02 = horizontal wall
03 = vertical wall
04 = wall corner (down + left)
05 = wall corner (left + up)
06 = wall corner (up + right)
07 = wall corner (right + down)
08 = 3 way wall connector (up)
09 = 3 way wall connector (right)
10 = 3 way wall connector (down)
11 = 3 way wall connector (left)
12 = door to next room
13 = invisWall

50 = Enemy1 - slug thing

99 = player



***********************************************************/



var stages = {
	stage1: {
		stage: [
			00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,
			07,02,02,02,02,02,02,02,02,02,02,02,02,02,02,04,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,
			03,00,00,00,00,00,00,00,50,00,00,00,00,00,00,03,
			03,00,00,00,00,00,00,00,07,04,00,00,00,00,00,03,
			03,00,00,00,00,00,00,00,06,05,00,00,00,00,00,03,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,12,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,12,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,07,05,
			03,00,99,00,00,00,00,00,00,00,00,00,00,07,05,00,
			06,02,02,02,02,02,02,02,02,02,02,02,02,05,00,00,
			00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00
		],
		width: 16,
		nextStage: this.parent.stage2
	},
	
	stage2: {
		stage: [
			00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,
			07,02,02,02,02,02,02,02,02,02,02,02,02,02,02,04,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,
			03,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,
			13,00,00,00,00,00,00,00,00,00,00,00,00,00,00,12,
			13,99,00,00,00,00,00,00,00,00,00,00,00,00,00,12,
			06,02,02,02,02,02,04,00,00,07,04,00,00,07,02,05,
			00,00,00,00,00,00,03,00,00,11,09,00,00,03,00,00
		],
		width: 16,
		nextStage: null
	}
};

var Stage = {
	walls: null,
	doors: null,
	
	create: function (stage, stageWidth) {
		if(this.walls == null) {
			this.walls = game.add.group();
			this.walls.enableBody = true;
		}
		if(this.doors == null) {
			this.doors = game.add.group();
			this.doors.enableBody = true;
		}
		var x = 0;
		var y = 0;
		
		for(let i of stage)
		{
			if(i == 01)
			{
				let wall = this.walls.create(x*16+8, y*16+8, 'walls');
				wall.body.immovable = true;
				wall.anchor.x = 0.5;
				wall.anchor.y = 0.5;
			}
			else if(i == 02)
			{
				let wall = this.walls.create(x*16+8, y*16+8, 'walls');
				wall.body.immovable = true;
				wall.frame = 1;
				wall.anchor.x = 0.5;
				wall.anchor.y = 0.5;

			}
			else if(i == 03)
			{
				let wall = this.walls.create(x*16+8, y*16+8, 'walls');
				wall.body.immovable = true;
				wall.frame = 1;
				wall.anchor.x = 0.5;
				wall.anchor.y = 0.5;
				wall.rotation = Math.PI/2;
			}
			else if(i == 04)
			{
				let wall = this.walls.create(x*16+8, y*16+8, 'walls');
				wall.body.immovable = true;
				wall.frame = 2;
				wall.anchor.x = 0.5;
				wall.anchor.y = 0.5;
			}
			else if(i == 05)
			{
				let wall = this.walls.create(x*16+8, y*16+8, 'walls');
				wall.body.immovable = true;
				wall.frame = 2;
				wall.anchor.x = 0.5;
				wall.anchor.y = 0.5;
				wall.rotation = Math.PI/2;
			}
			else if(i == 06)
			{
				let wall = this.walls.create(x*16+8, y*16+8, 'walls');
				wall.body.immovable = true;
				wall.frame = 2;
				wall.anchor.x = 0.5;
				wall.anchor.y = 0.5;
				wall.rotation = Math.PI;
			}
			else if(i == 07)
			{
				let wall = this.walls.create(x*16+8, y*16+8, 'walls');
				wall.body.immovable = true;
				wall.frame = 2;
				wall.anchor.x = 0.5;
				wall.anchor.y = 0.5;
				wall.rotation = -Math.PI/2;
			}
			else if(i == 08)
			{
				let wall = this.walls.create(x*16+8, y*16+8, 'walls');
				wall.body.immovable = true;
				wall.frame = 3;
				wall.anchor.x = 0.5;
				wall.anchor.y = 0.5
			}
			else if(i == 09)
			{
				let wall = this.walls.create(x*16+8, y*16+8, 'walls');
				wall.body.immovable = true;
				wall.frame = 3;
				wall.anchor.x = 0.5;
				wall.anchor.y = 0.5;
				wall.rotation = Math.PI/2;
			}
			else if(i == 10)
			{
				let wall = this.walls.create(x*16+8, y*16+8, 'walls');
				wall.body.immovable = true;
				wall.frame = 3;
				wall.anchor.x = 0.5;
				wall.anchor.y = 0.5;
				wall.rotation = Math.PI;
			}
			else if(i == 11)
			{
				let wall = this.walls.create(x*16+8, y*16+8, 'walls');
				wall.body.immovable = true;
				wall.frame = 3;
				wall.anchor.x = 0.5;
				wall.anchor.y = 0.5;
				wall.rotation = -Math.PI/2;
			}
			else if(i == 12)
			{
				let door = this.doors.create(x*16, y*16, 'invisWall');
				door.body.immovable = true;
			}
			else if(i == 13)
			{
				let wall = this.walls.create(x*16, y*16, 'invisWall');
				wall.body.immovable = true;
			}
			
			else if(i == 50)
			{
				Enemy1.create(x*16, y*16);
			}
			
			else if(i == 99)
			{
				Player.create(x*16, y*16);
			}
			
			x++;
			if(x == stageWidth)
			{
				x = 0;
				y++;
			}
		}
	}
}