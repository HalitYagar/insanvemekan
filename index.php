<?php
	
	$etkinlikler = array(
		'etkinlik1' => array('url' => 'blabla' ,'context' => 'blabla' ),
		'etkinlik2' => array('url' => 'blabla' ,'context'  => 'blabla' ),
		);

	$text = json_encode($etkinlikler);

	echo $text ;
	$p = fopen("etkinlikler.json", "w");

	
	fwrite($p , $text );
	

?>