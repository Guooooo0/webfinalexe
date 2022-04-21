<?php 
	$userName=$_REQUEST["name"];
	$userContent=$_REQUEST["text"];
	// echo $userName;
	// echo $userContent;
	// for testing
	// $userName="zjvivi";
	// $userContent="abc";

	$isUse=1;
	include("conn.php");
	$sql="select user_id from users where user_name='$userName'";
	//echo $sql;
	$rs=mysqli_query($conn,$sql);
	$row=mysqli_fetch_array($rs);
	if($row){	
		$userId=$row[0];
	}else{
		die("0");
	}
	
	$sql="INSERT INTO `messages` ";
	$sql.="( `user_id`, `message_content`, `message_status`) ";
	$sql.="VALUES (?, ?, ?)";
	//echo $sql;
	$stmt = mysqli_prepare($conn, $sql);
	
	mysqli_stmt_bind_param($stmt,"isi",$userId,$userContent,$isUse);
	// echo $userId,$userContent,$isUse;
	mysqli_stmt_execute($stmt);
	if(mysqli_affected_rows($conn)>0) 
		echo "1";
	else
		echo "0";

?>